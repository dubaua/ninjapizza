<template lang="pug">
  form(@submit.prevent="send", v-if="isOrderAvailable")
    fieldset
      legend Ваш заказ
      p
        label Как к вам обращаться
        input(v-model="name", name="name", required)
      p
        label Телефон для обратной связи
        input(v-model="phone", name="phone", required)
      p
        label Пожелания к заказу
        input(v-model="comment", name="comment")
      button Отправить
</template>

<script>
import api from '@/api/';

export default {
  name: 'Order',
  data() {
    return {
      name: '',
      phone: '',
      comment: '',
      isAgree: false,
    };
  },
  computed: {
    isOrderAvailable() {
      return this.$store.getters.totalPrice !== 0;
    },
  },
  methods: {
    send() {
      const cart = this.$store.state.cart;
      const total = `${this.$store.getters.totalPrice} руб.`;
      const order = Object.keys(cart).map(position => ({
        title: cart[position].title,
        amount: cart[position].amount,
        price: cart[position].price,
      }));
      const form = {
        name: this.name,
        phone: this.phone,
        comment: this.comment,
        order,
        total,
      };
      api.sendForm(form);
      const cockpitOrder = {
        ...form,
        order: form.order.map(position => ({
          field: {
            label: 'Позиция',
            type: 'text',
          },
          value: `${position.title} × ${position.amount}шт`,
        })),
      };
      // eslint-disable-next-line no-console
      api.saveOrder(cockpitOrder).then(orders => console.log(orders));
    },
  },
};
</script>

<style lang="scss">

</style>
