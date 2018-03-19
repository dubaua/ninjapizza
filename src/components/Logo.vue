<template lang="pug">
  router-link(to="/").logo
    svg: use(xlink:href="#logo")
</template>

<script>
/* eslint-disable no-unused-vars */
import logo from '@/assets/icons/logo.svg';

export default {
  name: 'Logo',
};
</script>

<style lang="scss">
.logo {
  display: inline-block;
  line-height: 0;
}
</style>
