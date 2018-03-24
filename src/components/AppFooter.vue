<template lang="pug">
.footer(v-if="isMobile")
  button.footer__button(@click="toggleMenu")
    .hamburger.hamburger--squeeze(:class="{'is-active':isMenuOpen}")
      .hamburger-box
        .hamburger-inner
  .footer__logo
    svg: use(xlink:href="#logo-compact")
  button.footer__button.cart-button(@click="toggleCart")
    .cart-button__label(v-if="totalAmount") {{cartLabel}}
    svg: use(xlink:href="#shopping-bag")
</template>

<script>
/* eslint-disable no-unused-vars */
import logo from '@/assets/icons/logo-compact.svg';
import '@/assets/icons/shopping-bag.svg';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'AppFooter',
  components: {
  },
  computed: {
    ...mapGetters(['totalAmount']),
    cartLabel() {
      return this.totalAmount > 9 ? '9+' : this.totalAmount;
    },
    isMenuOpen() {
      return this.$store.state.page.isMenuOpen;
    },
    isMobile() {
      return this.$mq === 'mobile';
    },
  },
  methods: {
    ...mapMutations(['toggleMenu', 'toggleCart']),
  },
};
</script>

<style lang="scss">
@import "../styles/_globals";
@import "../styles/hamburger";

.footer {
  position: fixed;
  bottom: 0;
  height: 48px;
  left: 0;
  padding: 4px 0;
  right: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;

  background: $background;
  box-shadow: 0 -1px 0 $background-l;

  &__button {
    max-width: $base*4;
    flex-basis: $base*4;
    text-align: center;
    border: 0;
    background: none;
    padding: 0;
    margin: 0;

    & svg {
      fill: $white;
      max-width: $base*3;
      max-height: $base*3;
    }
  }
  &__logo {
    flex-grow: 1;
    text-align: center;

    & svg {
      max-width: 91px;
      max-height: 48px;
    }
  }
}

.cart-button {
  position: relative;

  &__label {
    position: absolute;
    top: 9px;
    right: 12px;
    width: 13px;
    height: 13px;
    padding: 1px;
    border-radius: 50%;

    color: $white;
    background: $primary;
    font-weight: 500;
    font-size: 10px;
    line-height: 13px;
  }
}
</style>
