<template lang="pug">
  transition(name="slide-down")
    aside.cart(
      v-if="isCartOpen",
      v-touch:swipe.up="closeCart")
      .cart__empty(v-if="totalAmount === 0")
        | Ваша корзина пуста
      //- Move to separate component
      .cart__position.position(v-else, v-for="position in cart")
        .row
          .col-xs-12
            .position__title {{position.title}}
          .col-xs-12
            .position__status
              //- button.button.button--mini(
              //-   @click="changeAmount({ cartId: position.cartId, modifier: -1})") –
              | {{position.amount}}
              //- button.button.button--mini(
              //-   @click="changeAmount({ cartId: position.cartId, modifier: 1})") +
              | &times; {{position.price}} ₽
              button.button.button--mini(
                @click="changeAmount({ cartId: position.cartId, modifier: -position.amount})")
                  | &times;
      .cart__total(v-if="totalAmount !== 0")
        .cart__total-label Всего
        .cart__total-sum {{totalPrice}} ₽
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'Cart',
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
@import "../styles/_globals";
.cart {
  position: fixed;
  bottom: 56px;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;

  background: $background;
  padding: $base;

  &__empty {
    text-align: center;
  }
  &__total {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid $white;
    margin-top: $base;
    padding-top: $base;
  }
  &__total-sum {
    padding-right: $base*1.5;
  }
}
.position {
  margin-bottom: $base;
  &__status {
    text-align: right;
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
