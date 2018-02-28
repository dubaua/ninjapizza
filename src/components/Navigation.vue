<template lang="pug">
  div
    router-link(to="/") pizza
    router-link(to="/desserts") desserts
    router-link(to="/drinks") drinks
    router-link(to="/salad") salad
    router-link(to="/snack") snack
</template>

<script>
export default {
  name: 'Navigation',
  // data() {
  //   return {
  //     msg: 'Welcome to Your Vue.js App',
  //   };
  // },
};
</script>

<style>

</style>
