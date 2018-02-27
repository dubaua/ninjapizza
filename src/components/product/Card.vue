<template lang="pug">
  .card
    h2.card__title {{product.title}}
    .card__preview
      img(:src="product.photo.path", :alt="product.title")
    .card__description(v-html="product.description")
    .card__versions
      template(v-for="version in product.versions")
        .card__version
          input(type="radio")
          .card__measure {{version.measure}}
          .card__price {{version.price}} Rub
    button(@click="addToCart(product)") order

</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Card',
  props: {
    product: Object,
  },
  computed: {
    currentProduct() {
      return this.$route.params.productId || 'pizza';
    },
  },
  methods: {
    ...mapMutations([
      'addToCart',
      'toggleVersion',
    ]),
  },
};
</script>

<style lang="scss">
.card {
  padding: 16px;

  &__title {
    font-weight: bold;
  }

  &__preview {
    max-width: 100px;

    & img {
      max-width: 100%;
      height: auto;
    }
  }

  &__description {
    font-weight: normal;
  }

  &__versions {
    font-weight: normal;
  }

  &__version {
    display: flex;
  }

  &__measure {
    font-weight: normal;
  }

  &__price {
    font-weight: normal;
  }
}
</style>
