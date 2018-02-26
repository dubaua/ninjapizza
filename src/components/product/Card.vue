<template lang="pug">
  .card
    h2.card__title {{card.title}}
    .card__preview
      //- img(:src="card.photo.path", :alt="card.title")
    .card__description(v-html="card.description")
    .card__versions
      template(v-for="version in card.versions")
        .card__version
          .card__measure {{version.value.measure}}
          .card__price {{version.value.price}} Rub
    button(@click="addToCart(card)") order

</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Card',
  props: {
    card: Object,
  },
  methods: {
    ...mapMutations([
      'addToCart',
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

    &__measure {
      font-weight: normal;
    }

    &__price {
      font-weight: normal;
    }
  }
</style>
