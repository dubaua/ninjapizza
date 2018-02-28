<template lang="pug">
  .products
    .products__card(v-for="card in products")
      card(:product="card")
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
    },
  },
};
</script>

<style lang="scss">
.products {
  display: flex;
  flex-wrap: wrap;

  &__card {
    max-width: 25%;
    flex-basis: 25%;
  }
}
</style>
