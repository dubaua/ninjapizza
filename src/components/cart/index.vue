<template lang="pug">
  .cart
    .cart__empty(v-if="totalAmount === 0")
      .cart__empty-icon
        icon(glyph="shopping-bag", :width="160", :height="160")
      .cart__empty-text
        | Ваша корзина пуста
    .cart__filled(v-else)
      .cart__contents
        position(
          v-for="position in cart",
          :key="position.id",
          :position="position")
      .cart__total
        .cart__total-label Всего
        .cart__total-sum {{totalCost}} ₽
      order
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Order from '@/components/Order';
import Position from './Position';

export default {
  name: 'Cart',
  components: {
    Order,
    Position,
  },
  computed: {
    ...mapGetters(['totalCost', 'totalAmount']),
    ...mapState(['cart']),
    isCartOpen() {
      return this.$store.state.page.isCartOpen;
    },
  },
  methods: {
    ...mapActions(['changeAmount', 'closeCart']),
  },
};
</script>

<style lang="scss">
@import "~@/styles/_globals";
.cart {
  display: flex;
  flex-direction: column;

  &__empty {
    margin: auto;
    padding-bottom: 4em;
    text-align: center;
  }

  &__empty-icon svg {
    fill: $color-background-l;
  }

  &__filled {
    padding: 0 $base;
  }

  &__total {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid $color-text;
    margin: $base 0;
    padding-top: $base;
  }
  &__total-sum {
    padding-right: $base * 1.5;
  }
}
</style>
