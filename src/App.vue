<template lang="pug">
  #app
    panel(v-if="isMenuOpen")
    page
    cart(v-if="isMobile")
    order(v-if="isMobile")
    app-footer
</template>

<script>
import Panel from '@/components/Panel';
import Page from '@/components/Page';
import Cart from '@/components/Cart';
import Order from '@/components/Order';
import AppFooter from '@/components/AppFooter';

export default {
  name: 'App',
  components: {
    Panel,
    Page,
    Cart,
    Order,
    AppFooter,
  },
  computed: {
    isMobile() {
      return this.$mq === 'mobile';
    },
    isMenuOpen() {
      return this.$store.state.page.isMenuOpen || this.$mq === 'desktop';
    },
  },
};
</script>
