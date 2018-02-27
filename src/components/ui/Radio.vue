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
.radio {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid black;
  box-shadow: inset 0 0 0 8px white;
  background: #000;
  transition: box-shadow 0.1s linear;

  &.active {
    box-shadow: inset 0 0 0 4px white;
  }
}
</style>
