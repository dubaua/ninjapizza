<template lang="pug">
  #app
    section.page(
      v-touch:swipe.right="openMenu",
      v-touch:swipe.left="closeMenu",
    )
      banners
      product
      overlay
    template(v-if="isMobile")
      slide-in(
        direction="right",
        :isActive="page.isMenuOpen",
        swipeAction="closeMenu",
        title="Меню",
      )
        aside
          navigation
          info
      slide-in(
        direction="up",
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
        status
      transition(name="fade")
        .cart-popup(v-if="page.isCartOpen")
          cart
</template>

<script>
import Banners from '@/components/Banners';
import Product from '@/components/product';
import Navigation from '@/components/Navigation';
import Info from '@/components/Info';
import Cart from '@/components/cart';
import Status from '@/components/cart/Status';
import AppFooter from '@/components/AppFooter';
import Logo from '@/components/Logo';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Banners,
    Product,
    Cart,
    Status,
    AppFooter,
    Logo,
    Info,
    Navigation,
  },
  computed: {
    ...mapState(['page']),
    ...mapGetters(['somePanelsIsOpen']),
    isMobile() {
      return this.$mq === 'mobile';
    },
  },
  methods: {
    ...mapActions(['scheduleAction', 'closeMenu', 'closeCart']),
    openMenu() {
      this.scheduleAction({ next: 'openMenu', blocking: 'Cart' });
    },
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
  @include fixed-overlay;
  right: auto;
  width: 300px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  background: $background-d;
  border-right: 1px solid $background-l;
}

.cart-popup {
  position: fixed;
  top: 50%;
  left: calc(50% + 150px);
  transform: translate(-50%, -50%);
  max-width: 480px;
  width: 100%;
  padding: $base 0;
  background: $background;
}
</style>
