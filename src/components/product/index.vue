<template lang="pug">
  .row
    template(v-if="products")
      .col.col-xs-12.col-sm-6.col-lg-4.col-xxl-3(
        v-for="(card, id, index) in products",
        :class="'order-'+index")
        card(:product="card")
      .col.col-xs-12.col-sm-6.col-lg-4.col-xxl-3.order-xs-2.order-sm-2.order-lg-1.order-xxl-2
        banner(src="/static/banner-5-1.png", background="primary")
      .col.col-xs-12.col-sm-6.col-lg-4.col-xxl-3.order-xs-5.order-sm-4.order-xxl-6
        banner(src="/static/banner-6-1.png", background="background")
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
