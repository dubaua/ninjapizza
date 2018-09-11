<template lang="pug">
  .shop-section
    .row
      .col.col-xs-12.order-xs-1.col-lg-4.col-xxl-6
        .shop-section__about
          h1.shop-section__title {{description.title}}
          .shop-section__description(v-html="description.content")
      .col.col-xs-12.col-lg-8.order-lg-1.col-xxl-6
        .shop-section__preview
          img(:src="description.image.path", :alt="description.title").shop-section__image
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
    description() {
      return this.$store.state.productDescription[this.currentProduct];
    },
  },
};
</script>

<style lang="scss">
@import "~@/styles/_globals";

.shop-section {
  &__about {
    padding: $base * 2;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  &__description {
    p {
      margin: 0;
      line-height: 1.35;
    }
    * + p {
      margin-top: 1em;
    }
  }
  &__preview {
    line-height: 0;
  }
  &__image {
    max-width: 100%;
    height: auto;
  }
}
</style>
