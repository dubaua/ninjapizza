<template lang="pug">
button.button(
  v-on="$listeners",
  v-bind="$attrs",
  :class="className")
  slot
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    size: String,
  },
  computed: {
    className() {
      return this.size ? `button--${this.size}` : '';
    },
  },
};
</script>

<style lang="scss">
@import "~@/styles/_globals";

.button {
  @include font-montserrat--medium;

  padding: $base $base * 2;
  border: 0;
  border-radius: $base / 4;
  background: $primary;
  color: $text-color;
  font-weight: bold;
  line-height: 1;
  min-width: 170px;
  text-align: center;
  transition: $timing-fast;

  &:hover {
    background: $primary-l;
  }

  &:active {
    background: $primary-d;
  }

  &:disabled {
    background: desaturate($primary, 100%);
    cursor: not-allowed;
  }

  &--mini {
    width: $base * 1.5;
    height: $base * 1.5;
    min-width: 0;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-weight: normal;
  }

  &--wide {
    width: 100%;
  }
}
</style>
