<template lang="pug">
  router-link(to="/").logo
    icon(glyph="logo", :width="300", :height="100")
</template>

<script>
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
