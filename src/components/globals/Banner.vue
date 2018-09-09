<template lang="pug">
  .banner
    .banner__container(:class="'banner__container--'+background")
      img(:src="src")
</template>

<script>
export default {
  name: 'Banner',
  props: {
    src: String,
    background: String,
  },
};
</script>

<style lang="scss">
@import "~@/styles/_globals";

.banner {
  height: 100%;
  padding: $base * 2;
  box-sizing: border-box;

  &__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &--primary {
      background: $color-primary;
    }

    &--background {
      background: $color-background--contrast;
    }
  }

  & img {
    display: block;
    max-width: 100%;
    height: auto;
  }
}
</style>
