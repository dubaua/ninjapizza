<template lang="pug">
  div
    | Cart {{totalPrice}}
    template(v-for="position in cart")
      .position
        template(v-if="position.amount > 0")
          span {{position.title}}
          span
            button(@click="decrementAmount(position.cartId)") -
            | {{position.amount}}
            button(@click="incrementAmount(position.cartId)") +
            | &times; {{position.price}} ₽
        template(v-else)
          span {{position.title}}
          span {{position.price}} ₽
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
    ...mapMutations(['incrementAmount', 'decrementAmount']),
  },
};
</script>

<style lang="scss">
.position {
  display: flex;
  justify-content: space-between;
}
</style>
