<template lang="pug">
  .card
    .card__preview
      img(:src="product.photo.path", :alt="product.title")
    h2.card__title {{product.title}}
    .card__description(v-html="product.description")
    .card__measure(v-if="isSimpleProduct") {{product.measure}}
    .card__button-group(v-else)
      .card__button(
        v-for="version in product.versions",
        @click="setVersion(version.id)",
        :class="{'card__button--active': version.id === product.chosenVersion}")
          | {{version.measure}}
    .card__action
      .row.row--between.row--middle
        .card__price {{ price }} ₽
        turn-button(:active="amount > 0")
          base-button(@click="addToCart(product)" slot="unactive") Беру
          base-button(@click="addToCart(product)" slot="active") В корзине {{amount}}
</template>

<script>
import { mapActions } from 'vuex';
import { numberWithSpaces } from '@/utils';

/* eslint-disable no-underscore-dangle */
export default {
  name: 'Card',
  props: {
    product: Object,
  },
  computed: {
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
    versionId() {
      return this.product._id + (this.isSimpleProduct ? '' : `_ver${this.product.chosenVersion}`);
    },
    amount() {
      return this.$store.getters.amountInCart(this.versionId);
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
@import "~@/styles/_globals";

.card {
  $block: "card";

  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding: $base * 2;

  &__preview {
    & img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }

  &__title {
    @include font-montserrat--bold();
    font-size: $base;
    margin: $base 0;
  }

  &__description {
    font-weight: normal;
    line-height: 1.3;

    p {
      margin-top: 0;
    }
  }

  &__versions {
    margin-top: auto;
    padding: 0 $base;
  }

  &__versions {
    font-weight: normal;
  }

  &__measure {
    padding-bottom: $base;
    padding-top: $base;
  }

  &__button-group {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: $base;
  }

  &__button {
    flex-grow: 1;
    text-align: center;
    padding: $base/2 0;
    cursor: pointer;
    border: 1px solid transparent;
    background: $color-background-unactive;
    color: $color-unactive;

    &--active {
      color: $color-primary;
      background: none;
      border-color: $color-primary;
    }
  }

  &__action {
    margin-top: auto;
    perspective: 900px;
    transform-style: preserve-3d;
  }

  &__price {
    font-weight: 700;
  }
}
</style>
