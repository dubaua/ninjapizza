<template lang="pug">
  h1.title
    slot
</template>

<script>
export default {
  name: 'Title',
};
</script>

<style lang="scss">
@import "../styles/_globals";

.title {
  @include font-montserrat--bold;
  margin: 0 $base $base;
  padding: $base 0;
  box-shadow: 0 1px 0 $background-l;
  font-size: $base;
  color: $white;
  text-align: center;
}
</style>
