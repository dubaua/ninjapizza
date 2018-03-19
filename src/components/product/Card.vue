<template lang="pug">
  .card
    .card__preview
      img(:src="product.photo.path", :alt="product.title")
    .card__details
      h2.card__title {{product.title}}
      .card__description(v-html="product.description")
    .card__status
      template(v-if="isSimpleProduct")
        .card__version {{product.measure}}
      template(v-else)
        .row
          .col.col-xs-6(v-for="version in product.versions")
            .card__version.card__version--clicable(@click="setVersion(version.id)")
              radio(:value="version.id === product.chosenVersion")
              .card__measure {{version.measure}}
      .card__action
        .card__price {{ price }} ₽
        button.button(@click="addToCart(product)") {{buttonText}}
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Radio from '@/components/ui/Radio';
import { numberWithSpaces } from '@/utils';

/* eslint-disable no-underscore-dangle */

export default {
  name: 'Card',
  components: {
    Radio,
  },
  props: {
    product: Object,
  },
  computed: {
    ...mapGetters([
      'isInCart',
    ]),
    isSimpleProduct() {
      return typeof this.product.versions === 'undefined';
    },
    price() {
      return this.isSimpleProduct
        ? numberWithSpaces(this.product.price)
        : numberWithSpaces(this.product.versions[this.product.chosenVersion].price);
    },
    currentProduct() {
      return this.$route.params.productId || 'pizza';
    },
    buttonText() {
      if (this.isInCart(this.product._id)) {
        return 'В корзине';
      }
      return 'Беру';
    },
  },
  methods: {
    ...mapActions([
      'addToCart',
    ]),
    // actually this is action creator
    setVersion(versionId) {
      if (this.product.chosenVersion !== versionId) {
        this.$store.commit('setVersion', {
          product: this.currentProduct,
          productId: this.product._id,
          versionId,
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/_globals";

.card {
  $block: "card";

  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 1em;

  &__preview {
    & img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }

  &__details {
    padding: 0 $base;
  }

  &__title {
    @include font-montserrat--bold();
    font-size: $base;

    margin: $base 0;
  }

  &__description {
    font-weight: normal;
    line-height: 1.3;

    * {
      margin: $base 0 0;
    }
  }

  &__status {
    margin-top: auto;
    padding: 0 $base;
  }

  &__versions {
    font-weight: normal;
  }

  &__version {
    display: flex;
    align-items: center;
    padding-bottom: $base;
    padding-top: $base;

    * + * {
      margin-left: $base / 2;
    }

    &--clicable {
      cursor: pointer;
    }
  }

  &__action {
    display: flex;
    align-items: center;
    justify-content: space-between;

    * + * {
      margin-left: $base / 2;
    }
  }

  &__price {
    font-weight: 700;
  }
}
</style>
