<template lang="pug">
  .row
    template(v-if="products")
      .col.col-xs-12.col-sm-6.col-lg-4.col-xxl-3(v-for="card in products")
        card(:product="card")
    .col.col-xs-12(v-else)
      | Нет товаров
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
