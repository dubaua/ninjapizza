<template lang="pug">
  transition(name="slide-left")
    aside.panel(
      v-if="!isMobile || isMenuOpen",
      v-touch:swipe.left="closeMenu"
      )
      logo(v-if="!isMobile")
      //- info
      Title(v-if="isMobile") Меню
      navigation
      cart(v-if="!isMobile")
      order(v-if="!isMobile")
</template>

<script>
import Logo from '@/components/Logo';
import Info from '@/components/Info';
import Navigation from '@/components/Navigation';
import Title from '@/components/Title';
import Cart from '@/components/cart';
import Order from '@/components/Order';
import { mapMutations } from 'vuex';

export default {
  name: 'Panel',
  components: {
    Logo,
    Info,
    Navigation,
    Title,
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
