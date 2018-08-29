<template lang="pug">
  .info
    .info__block ⏰ 9–23, выходные 10–24
    .info__block ☎️ 223–64–33
</template>

<script>
export default {
  name: 'Info',
};
</script>

<style lang="scss">
@import "~@/styles/_globals";

.info {
  padding: $base;
  background: $color-background;

  @include breakpoint("lg") {
    background: none;
  }

  &__block {
    @include font-montserrat--medium();
    text-align: center;
    margin: $base 0;
  }
}
</style>
