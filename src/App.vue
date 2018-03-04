<template>
  <div id="app">
    <aside>
      <logo/>
      <info/>
      <navigation/>
    </aside>
    <section>
      <banners/>
      <product/>
    </section>
    <cart/>
    <order/>
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import Info from '@/components/Info';
import Navigation from '@/components/Navigation';
import Cart from '@/components/Cart';
import Banners from '@/components/Banners';
import Product from '@/components/product';
import Order from '@/components/Order';

export default {
  name: 'App',
  components: {
    Logo,
    Info,
    Navigation,
    Cart,
    Banners,
    Product,
    Order,
  },
};
</script>
