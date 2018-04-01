<template lang="pug">
button.uutton(:class="{'uutton--active': active}")
  .uutton__state.uutton__state--unactive {{unactiveText}}
  .uutton__state.uutton__state--active {{activeText}}
</template>

<script>
export default {
  name: 'Button',
  props: {
    active: Boolean,
    activeText: String,
    unactiveText: String,
  },
};
</script>

<style lang="scss">
@import "../../styles/_globals";

.uutton {
  $block: uutton;

  perspective: 900px;

  &__state {
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
    transition: transform $timing;
    transform-style: preserve-3d;

    &:hover {
      background: $primary-l;
    }
    &:active {
      background: $primary-d;
    }

    &--active {
      transform: rotateX(89deg) translateZ(-24px);
    }
  }

  &--active {
    & #{$block}__state--unactive {
      transform: rotateX(-89deg) translateZ(24px);
    }
    & #{$block}__state--active {
      transform: rotateX(0) translateZ(0);
    }
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

// .turn .button {
//   transform: rotateX(-89deg) translateZ(24px);
// }
</style>
