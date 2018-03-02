<template lang="pug">
  div
    template(v-for="position in cart", v-if="position.amount !== 0")
      .position
        span {{position.title}}
        span
          button(@click="changeAmount({ cartId: position.cartId, modifier: -1})") -
          | {{position.amount}}
          button(@click="changeAmount({ cartId: position.cartId, modifier: 1})") +
          | &times; {{position.price}} ₽
          button(
            @click="changeAmount({ cartId: position.cartId, modifier: -position.amount})") &times;
    | Total {{totalPrice}} ₽
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart',
  computed: {
    ...mapGetters(['totalPrice']),
    ...mapState(['cart']),
  },
  methods: {
    ...mapActions(['changeAmount']),
  },
};
</script>

<style lang="scss">
.position {
  display: flex;
  justify-content: space-between;
}
</style>
