<template lang="pug">
  section.page(v-touch:swipe.right="openMenu")
    banners
    product
</template>

<script>
/* eslint-disable no-unused-vars */
import Banners from '@/components/Banners';
import Product from '@/components/product';
import logo from '@/assets/icons/logo-compact.svg';
import '@/assets/icons/shopping-bag.svg';
import { mapMutations } from 'vuex';

export default {
  name: 'Page',
  components: {
    Banners,
    Product,
  },
  methods: {
    ...mapMutations(['openMenu']),
  },
};
</script>

<style lang="scss">
@import "../styles/_globals";

.page {
  padding-bottom: 56px;
}

@include breakpoint("xl") {
  .page {
    padding-bottom: 0;
    margin-left: 300px;
  }
}
</style>
