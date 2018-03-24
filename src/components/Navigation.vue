<template lang="pug">
  .menu
    router-link(to="/", @click.native="closeMenu").menu__link
      .menu__icon
        svg: use(xlink:href="#pizza")
      .menu__label Пицца
    router-link(to="/desserts", @click.native="closeMenu").menu__link
      .menu__icon
        svg: use(xlink:href="#donut")
      .menu__label Десерты
    router-link(to="/drinks", @click.native="closeMenu").menu__link
      .menu__icon
        svg: use(xlink:href="#drink")
      .menu__label Напитки
    router-link(to="/salad", @click.native="closeMenu").menu__link
      .menu__icon
        svg: use(xlink:href="#salad")
      .menu__label Салаты
    router-link(to="/snack", @click.native="closeMenu").menu__link
      .menu__icon
        svg: use(xlink:href="#fries")
      .menu__label Закуски
</template>

<script>
/* eslint-disable no-unused-vars */
import salad from '@/assets/icons/salad.svg';
import pizza from '@/assets/icons/pizza.svg';
import fries from '@/assets/icons/fries.svg';
import drink from '@/assets/icons/drink.svg';
import donut from '@/assets/icons/donut.svg';
import { mapMutations } from 'vuex';

export default {
  name: 'Navigation',
  methods: {
    ...mapMutations(['closeMenu']),
  },
};
</script>

<style lang="scss">
@import "../styles/_globals";

.menu {
  &__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: $base*0.75 $base*1.5;

    &.router-link-exact-active {
      background: $background-d;
    }

    & * + * {
      margin-left: $base * 1.5;
    }
  }

  &__icon {
    & svg {
      width: 32px;
      height: 32px;
    }
    & use {
      fill: $white;
    }
  }

  &__label {
    color: $white;
    text-transform: uppercase;
  }
}
</style>
