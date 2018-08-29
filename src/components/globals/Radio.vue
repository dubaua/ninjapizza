<template lang="pug">
  .radio(:class="{active: value}")
</template>

<script>
export default {
  name: 'Radio',
  props: {
    value: Boolean,
  },
};
</script>

<style lang="scss">
@import "~@/styles/_globals";

.radio {
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 12px solid white;
  background: $primary;
  transition: border-width linear;
  transition-duration: $timing-fast;
  box-sizing: border-box;
  box-shadow: 0 0 0 1px #999;

  &.active {
    border-width: 6px;
  }
}
</style>
