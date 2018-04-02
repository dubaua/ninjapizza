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
      //- transition(name="fade")
      //-   .overlay(v-if="somePanelsIsOpen")
    template(v-else)
      aside.desktop-panel
        logo
        info
        navigation
        status
      transition(name="fade")
        .cart-overlay(
          v-if="page.isCartOpen",
          @click.self="closeCart",
          )
          .cart-overlay__cart
            cart
</template>

<script>
// TODO schedule open menu, create overlay, freeze, when overlay is open
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
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: auto;
  width: 300px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  background: $background-d;
  border-right: 1px solid $background-l;
}

.cart-overlay {
  top: 0;
  bottom: 0;
  right: 0;
  left: 300px;
  z-index: 1;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba($background-d, 0.8);

  &__cart {
    max-width: 480px;
    width: 100%;
    padding: $base 0;
    background: $background;
  }
}
</style>
