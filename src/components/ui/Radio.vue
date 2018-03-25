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
@import "../../styles/_colors";
@import "../../styles/_globals";

.radio {
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 12px $white;
  background: $primary;
  transition: box-shadow linear;
  transition-duration: $timing;

  &.active {
    box-shadow: inset 0 0 0 6px $white;
  }
}
</style>
