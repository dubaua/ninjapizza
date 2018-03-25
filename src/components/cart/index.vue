<template lang="pug">
  transition(name="slide-down")
    aside.cart(
      v-if="isCartOpen",
      v-touch:swipe.up="closeCart")
      Title  Корзина
      .cart__empty(v-if="totalAmount === 0")
        .cart__empty-icon
          icon(glyph="shopping-bag", :width="160", :height="160")
        .cart__empty-text
          | Ваша корзина пуста
      .cart__contents(v-else)
        position(
          v-for="position in cart",
          :key="position.id",
          :position="position")
      .cart__total(v-if="totalAmount !== 0")
        .cart__total-label Всего
        .cart__total-sum {{totalPrice}} ₽
      button.button
        | Заказываю
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import Title from '@/components/Title';
import Icon from '@/components/Icon';
import Position from './Position';

export default {
  name: 'Cart',
  components: {
    Title,
    Icon,
    Position,
  },
  computed: {
    ...mapGetters(['totalPrice', 'totalAmount']),
    ...mapState(['cart']),
    isCartOpen() {
      return this.$store.state.page.isCartOpen;
    },
  },
  methods: {
    ...mapActions(['changeAmount']),
    ...mapMutations(['closeCart']),
  },
};
</script>

<style lang="scss">
@import "../../styles/_globals";
.cart {
  position: fixed;
  bottom: 56px;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;

  background: $background;

  &__empty {
    text-align: center;
  }

  &__empty-icon {
    opacity: 0.2;
  }

  &__contents {
    padding: 0 $base;
  }

  &__total {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid $white;
    margin: $base;
    padding-top: $base;
  }
  &__total-sum {
    padding-right: $base*1.5;
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform $timing;
}

.slide-down-enter,
.slide-down-leave-to {
  transform: translate(0, 100%);
}
</style>
