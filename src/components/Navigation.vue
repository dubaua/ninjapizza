<template lang="pug">
  .menu
    template(v-for="link in menu")
      router-link(:to="link.to", @click.native="closeMenu").menu__link
        .menu__icon
          icon(:glyph="link.glyph", :width="32", :height="32")
        .menu__label {{link.label}}
</template>

<script>
import Icon from '@/components/icon';
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
  components: { Icon },
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
    text-decoration: none;
    padding: $base*0.5 $base*1.5;

    &.router-link-exact-active {
      background: $background;
    }

    & * + * {
      margin-left: $base * 1.5;
    }
  }

  &__label {
    color: $text-color;
    text-transform: uppercase;
  }
}
</style>
