<template lang="pug">
  transition(:name="transitionName" @after-leave="dispatchNext")
    aside.slide-in(
      v-if="isActive",
      v-touch:swipe.top="from === 'top' && swipeAction ? onSwipe : null",
      v-touch:swipe.left="from === 'left' && swipeAction ? onSwipe : null",
      v-touch:swipe.right="from === 'right' && swipeAction ? onSwipe : null",
      v-touch:swipe.bottom="from === 'bottom' && swipeAction ? onSwipe : null",
    )
      h1.slide-in__title(v-if="title") {{ title }}
      div.slide-in__body
        slot
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SlideIn',
  props: {
    from: {
      requred: true,
      type: String,
      default: 'left',
    },
    isActive: {
      requred: true,
      type: Boolean,
    },
    swipeAction: String,
    title: String,
  },
  computed: {
    isMobile() {
      return this.$mq === 'mobile';
    },
    transitionName() {
      return `slide-from-${this.from}`;
    },
  },
  methods: {
    ...mapActions(['dispatchNext']),
    onSwipe() {
      this.$store.dispatch(this.swipeAction);
    },
  },
};
</script>

<style lang="scss">
@import "~@/styles/_globals";

.slide-in {
  @include fixed-overlay;

  bottom: 56px;
  display: flex;
  flex-direction: column;
  z-index: 10;
  background: $background-d;
  box-shadow: 1px 0 0 $background-l;

  @include breakpoint("sm") {
    right: 50%;
  }

  @include breakpoint("lg") {
    right: 66.67%;
  }

  &__title {
    @include font-montserrat--bold;
    margin: 0 $base $base;
    padding: $base 0;
    box-shadow: 0 1px 0 $background-l;
    font-size: $base;
    color: $text-color;
    text-align: center;
  }

  &__body {
    flex-grow: 1;
    max-height: 100%;
    overflow-y: auto;
    padding-bottom: $base;
  }
}
</style>
