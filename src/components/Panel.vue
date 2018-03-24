<template lang="pug">
  transition(name="slide-left")
    aside.panel(
      v-if="!isMobile || isMenuOpen",
      v-touch:swipe.left="closeMenu"
      )
      logo(v-if="!isMobile")
      //- info
      navigation
      cart(v-if="!isMobile")
      order(v-if="!isMobile")
</template>

<script>
import Logo from '@/components/Logo';
import Info from '@/components/Info';
import Navigation from '@/components/Navigation';
import Cart from '@/components/Cart';
import Order from '@/components/Order';
import { mapMutations } from 'vuex';

export default {
  name: 'Panel',
  components: {
    Logo,
    Info,
    Navigation,
    Cart,
    Order,
  },
  computed: {
    isMobile() {
      return this.$mq === 'mobile';
    },
    isMenuOpen() {
      return this.$store.state.page.isMenuOpen;
    },
  },
  methods: {
    ...mapMutations(['closeMenu']),
  },
};
</script>

<style lang="scss">
@import "../styles/_globals";

.panel {
  background: $background-d;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 56px;
  z-index: 2;
}

@include breakpoint("sm") {
  .panel {
    right: 50%;
  }
}

@include breakpoint("lg") {
  .panel {
    right: 66.67%;
  }
}

@include breakpoint("xl") {
  .panel {
    bottom: 0;
    right: auto;
    width: 300px;
  }
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform $timing;
}
.slide-left-enter,
.slide-left-leave-to {
  transform: translate(-100%, 0);
}
</style>
