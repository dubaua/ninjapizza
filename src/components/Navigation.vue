<template lang="pug">
  .menu
    router-link(to="/", @click.native="closeMenu").menu__link
      .menu__icon
        icon(glyph="pizza", :width="32", :height="32")
      .menu__label Пицца
    router-link(to="/desserts", @click.native="closeMenu").menu__link
      .menu__icon
        icon(glyph="donut", :width="32", :height="32")
      .menu__label Десерты
    router-link(to="/drinks", @click.native="closeMenu").menu__link
      .menu__icon
        icon(glyph="drink", :width="32", :height="32")
      .menu__label Напитки
    router-link(to="/salad", @click.native="closeMenu").menu__link
      .menu__icon
        icon(glyph="salad", :width="32", :height="32")
      .menu__label Салаты
    router-link(to="/snack", @click.native="closeMenu").menu__link
      .menu__icon
        icon(glyph="fries", :width="32", :height="32")
      .menu__label Закуски
</template>

<script>
import Icon from '@/components/Icon';
import { mapMutations } from 'vuex';

export default {
  name: 'Navigation',
  components: { Icon },
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

  &__label {
    color: $white;
    text-transform: uppercase;
  }
}
</style>
