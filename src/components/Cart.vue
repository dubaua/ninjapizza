<template lang="pug">
  div
    | Cart {{total}}
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    total() {
      return this.$store.getters.totalPrice;
    },
  },
};
</script>

<style>

</style>
