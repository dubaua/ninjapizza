<template lang="pug">
  transition(:name="transitionName")
    aside.slide-in(
      v-if="isActive",
      v-touch:swipe.top="from === 'top' && swipeMutation ? onSwipe : null",
      v-touch:swipe.left="from === 'left' && swipeMutation ? onSwipe : null",
      v-touch:swipe.right="from === 'right' && swipeMutation ? onSwipe : null",
      v-touch:swipe.bottom="from === 'bottom' && swipeMutation ? onSwipe : null",
    )
      h1.slide-in__title(v-if="title") {{ title }}
      div.slide-in__body
        slot
</template>

<script>
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
    swipeMutation: String,
    title: String,
  },
  computed: {
    isMobile() {
      return this.$mq === 'mobile';
    },
    isMenuOpen() {
      return this.$store.state.page.isMenuOpen;
    },
    transitionName() {
      return `slide-from-${this.from}`;
    },
  },
  methods: {
    onSwipe() {
      this.$store.commit(this.swipeMutation);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/_globals";

.slide-in {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 56px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  background: $background-d;
  box-shadow: 1px 0 0 $background-l;

  &__title {
    @include font-montserrat--bold;
    margin: 0 $base $base;
    padding: $base 0;
    box-shadow: 0 1px 0 $background-l;
    font-size: $base;
    color: $white;
    text-align: center;
  }
}

@include breakpoint("sm") {
  .slide-in {
    right: 50%;
  }
}

@include breakpoint("lg") {
  .slide-in {
    right: 66.67%;
  }
}

.slide-from-bottom-enter-active,
.slide-from-bottom-leave-active,
.slide-from-left-enter-active,
.slide-from-left-leave-active,
.slide-from-right-enter-active,
.slide-from-right-leave-active,
.slide-from-top-enter-active,
.slide-from-top-leave-active {
  transition: transform $timing;
}

.slide-from-bottom-enter,
.slide-from-bottom-leave-to {
  transform: translate(0, 100%);
}

.slide-from-left-enter,
.slide-from-left-leave-to {
  transform: translate(-100%, 0);
}

.slide-from-right-enter,
.slide-from-right-leave-to {
  transform: translate(100%, 0);
}

.slide-from-top-enter,
.slide-from-top-leave-to {
  transform: translate(0, -100%);
}
</style>
