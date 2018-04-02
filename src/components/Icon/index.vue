<template lang="pug">
  svg.icon(:width="width", :height="height", focusable="false")
    use(:xlink:href="xhref")
</template>

<script>
import './icon-sprite';

export default {
  name: 'Icon',
  props: {
    glyph: {
      required: true,
      type: String,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  computed: {
    xhref() {
      return `#${this.glyph}`;
    },
  },
};
</script>

<style lang="scss">
@import "~@/styles/_globals";

.icon {
  pointer-events: none;
  display: inline-block;
  fill: $text-color;
}
</style>
