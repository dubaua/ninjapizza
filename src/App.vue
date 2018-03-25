<template lang="pug">
  #app
    section.page(v-touch:swipe.right="openMenu")
      banners
      product
    template(v-if="isMobile")
      slide-in(
        from="left",
        :isActive="page.isMenuOpen",
        swipeMutation="closeMenu",
        title="Меню",
      )
        aside
          navigation
          info
      slide-in(
        from="bottom",
        :isActive="page.isCartOpen",
        swipeMutation="closeCart",
        title="Корзина",
      )
        cart
      slide-in(
        from="bottom",
        :isActive="page.isOrderOpen",
        swipeMutation="closeOrder",
        title="Ваш Заказ",
      )
        order
      app-footer
    template(v-else)
      aside.desktop-panel
        logo
        info
        navigation
        cart
        order
</template>

<script>
import Banners from '@/components/Banners';
import Product from '@/components/product';
import SlideIn from '@/components/SlideIn';
import Navigation from '@/components/Navigation';
import Info from '@/components/Info';
import Cart from '@/components/cart';
import Order from '@/components/Order';
import AppFooter from '@/components/AppFooter';
import Logo from '@/components/Logo';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {
    Banners,
    Product,
    SlideIn,
    Cart,
    Order,
    AppFooter,
    Logo,
    Info,
    Navigation,
  },
  computed: {
    ...mapState(['page']),
    isMobile() {
      return this.$mq === 'mobile';
    },
  },
  methods: {
    ...mapMutations(['openMenu']),
  },
};
</script>

<style lang="scss">
@import "./styles/_globals";

.page {
  padding-bottom: 56px;
}

@include breakpoint("xl") {
  .page {
    padding-bottom: 0;
    margin-left: 300px;
  }
}

.desktop-panel {
  background: $background-d;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: auto;
  width: 300px;
  z-index: 2;
}
</style>
