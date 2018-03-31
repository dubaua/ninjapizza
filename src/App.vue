<template lang="pug">
  #app
    section.page(
      v-touch:swipe.right="openMenu",
      v-touch:swipe.left="closeMenu",
    )
      banners
      product
    template(v-if="isMobile")
      slide-in(
        from="left",
        :isActive="page.isMenuOpen",
        swipeAction="closeMenu",
        title="Меню",
      )
        aside
          navigation
          info
      slide-in(
        from="bottom",
        :isActive="page.isCartOpen",
        swipeAction="closeCart",
        title="Корзина",
      )
        cart
      app-footer
    template(v-else)
      aside.desktop-panel
        logo
        info
        navigation
        cart
</template>

<script>
import Banners from '@/components/Banners';
import Product from '@/components/product';
import SlideIn from '@/components/SlideIn';
import Navigation from '@/components/Navigation';
import Info from '@/components/Info';
import Cart from '@/components/cart';
import AppFooter from '@/components/AppFooter';
import Logo from '@/components/Logo';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Banners,
    Product,
    SlideIn,
    Cart,
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
    ...mapActions(['openMenu', 'closeMenu']),
  },
};
</script>

<style lang="scss">
@import "./styles/_globals";

.page {
  box-sizing: border-box;
  padding-bottom: 56px;
  min-height: 100vh;
}

@include breakpoint("xl") {
  .page {
    margin-left: 300px;

    padding-bottom: 0;
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
