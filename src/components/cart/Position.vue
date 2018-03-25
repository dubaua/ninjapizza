<template lang="pug">
  .position
    .position__title {{position.title}} {{position.details}}
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
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Position',
  props: {
    position: Object,
  },
  methods: {
    ...mapActions(['changeAmount']),
  },
};
</script>

<style lang="scss">
@import "../../styles/_globals";
.position {
  margin-bottom: $base;
  &__status {
    text-align: right;
  }
}
</style>
