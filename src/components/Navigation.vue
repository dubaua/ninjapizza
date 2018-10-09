<template lang="pug">
  .menu
    template(v-for="link in menu")
      router-link(:to="link.to", @click.native="closeMenu").menu__link
        icon(:glyph="link.glyph", :width="32", :height="32").menu__icon
        .menu__label {{link.label}}
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Navigation',
  data() {
    return {
      menu: [
        {
          to: '/',
          label: 'Пицца',
          glyph: 'pizza',
        },
        {
          to: '/desserts',
          label: 'Десерты',
          glyph: 'donut',
        },
        {
          to: '/drinks',
          label: 'Напитки',
          glyph: 'drink',
        },
        {
          to: '/salad',
          label: 'Салаты',
          glyph: 'salad',
        },
        {
          to: '/snack',
          label: 'Закуски',
          glyph: 'fries',
        },
      ],
    };
  },
  methods: {
    ...mapActions(['closeMenu']),
  },
};
</script>

<style lang="scss">
@import "~@/styles/_globals";

.menu {
  &__link {
    display: flex;
    align-items: center;
    padding: $base * 0.5 $base * 1.5;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: $color-text;

    &.router-link-exact-active {
      color: $color-text--contrast;
      background: $color-primary;
    }
  }

  &__label {
    margin-left: $base * 1.5;
  }
}
</style>
