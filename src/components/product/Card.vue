<template lang="pug">
  .card
    h2.card__title {{product.title}}
    .card__preview
      img(:src="product.photo.path", :alt="product.title")
    .card__description(v-html="product.description")
    .card__versions
      template(v-for="(version, index) in product.versions")
        .card__version(@click="setVersion(index, version.isChosen)")
          radio(:value="version.isChosen")
          .card__measure {{version.measure}}
          .card__price {{version.price}} ₽
    button(@click="addToCart(product)") order

</template>

<script>
import { mapMutations } from 'vuex';
import Radio from '@/components/ui/Radio';

export default {
  name: 'Card',
  components: {
    Radio,
  },
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
    ]),
    setVersion(index, currentValue) {
      if (!currentValue) {
        this.$store.commit('setVersion', {
          product: this.currentProduct,
          // eslint-disable-next-line
          productId: this.product._id,
          versionIndex: index,
        });
      }
    },
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
    cursor: pointer;
  }

  &__measure {
    font-weight: normal;
  }

  &__price {
    font-weight: normal;
  }
}
</style>
