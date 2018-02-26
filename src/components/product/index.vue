<template lang="pug">
  div
    | Products
    template(v-for="card in products")
      card(:card="card")
</template>

<script>
import Card from './Card';

export default {
  name: 'Product',
  components: {
    Card,
  },
  computed: {
    currentProduct() {
      return this.$route.params.productId || 'pizza';
    },
    products() {
      return this.$store.state.products[this.currentProduct];
    }
  }
};
</script>

<style>

</style>
