<template lang="pug">
  div
    | Cart {{totalPrice}}
    template(v-for="position in cart", v-if="position.amount > 0")
      .position
        span {{position.title}}
        span
          button(@click="changeAmount({ cartId: position.cartId, modifier: -1})") -
          | {{position.amount}}
          button(@click="changeAmount({ cartId: position.cartId, modifier: 1})") +
          | &times; {{position.price}} ₽
          button(
            @click="changeAmount({ cartId: position.cartId, modifier: -position.amount})") &times;
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Cart',
  computed: {
    ...mapGetters(['totalPrice']),
    ...mapState(['cart']),
  },
  methods: {
    ...mapMutations(['changeAmount']),
  },
};
</script>

<style lang="scss">
.position {
  display: flex;
  justify-content: space-between;
}
</style>
