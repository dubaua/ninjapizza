<template lang="pug">
  router-link(to="/").logo
    icon(glyph="logo")
</template>

<script>
/* eslint-disable no-unused-vars */
import Icon from '@/components/icon';

export default {
  name: 'Logo',
  components: { Icon },
};
</script>

<style lang="scss">
.logo {
  display: inline-block;
  line-height: 0;
}
</style>
