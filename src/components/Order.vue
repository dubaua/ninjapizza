<template lang="pug">
  form(@submit.prevent="send", v-if="isOrderAvailable").form
    vue-form-generator(
      :schema="schema",
      :model="model",
      :options="formOptions"
    )
    base-button(size="wide", :disabled="isSending || isSent") Заказываю
    .form__isSent(v-if="isSent")
      p 🎉 🎉 🎉
      p Ваш заказ отправлен! Скоро вам перезвонит наш менеджер для подтверждения заказа
</template>

<script>
// TODO disable form while sending

import api from '@/api/';
import { mapMutations } from 'vuex';

export default {
  name: 'Order',
  data() {
    return {
      isSending: false,
      isSent: false,
      model: {
        name: '',
        phone: '',
        comment: '',
        // isAgree: false,
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Ваше Имя',
            model: 'name',
            id: 'name',
            placeholder: 'Ваше Имя',
            required: true,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Ваш телефон',
            model: 'phone',
            id: 'phone',
            placeholder: 'Ваш телефон',
            required: true,
          },
          {
            type: 'textArea',
            label: 'Комментарий к заказу',
            model: 'comment',
            id: 'comment',
            rows: 4,
            max: 500,
            placeholder: 'Комментарий к заказу',
          },
          // {
          //   type: 'checkbox',
          //   label: 'Я согласен на обработку персональных данных',
          //   model: 'isAgree',
          // }
        ],
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
      },
    };
  },
  computed: {
    isOrderAvailable() {
      return this.$store.getters.totalCost !== 0;
    },
  },
  methods: {
    ...mapMutations(['clearCart']),
    clearForm() {
      this.model = {
        name: '',
        phone: '',
        comment: '',
      };
    },
    send() {
      this.isSending = true;

      // first send to email via phpmailer
      const cart = this.$store.state.cart;
      const total = `${this.$store.getters.totalCost} руб.`;
      const order = Object.keys(cart).map(position => ({
        title: cart[position].title,
        amount: cart[position].amount,
        price: cart[position].price,
      }));
      const form = {
        name: this.model.name,
        phone: this.model.phone,
        comment: this.model.comment,
        order,
        total,
      };
      api.sendForm(form).then((response) => {
        this.isSending = false;
        if (response) {
          this.isSent = true;
          setTimeout(() => {
            this.clearForm();
            this.clearCart();
            this.isSent = false;
          }, 3e3);
        } else {
          // show error
        }
      });

      // then save to cockpit backend
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
      api.saveOrder(cockpitOrder);
    },
  },
};
</script>

<style lang="scss">
@import "~@/styles/_globals";

.form {
  & .form-group + .form-group {
    margin-top: $base;
  }

  & fieldset {
    border: 0;
    padding: 0;
    margin: 0 0 $base;
  }
  & label {
    display: none;
  }
  & input,
  & textarea {
    box-sizing: border-box;
    padding: $base/2;
    width: 100%;
    background: $color-text;
    border: 0;
    border-radius: $base/4;
  }
  & textarea {
    display: block;
    resize: vertical;
  }
  &__isSent {
    line-height: 1.5;
    text-align: center;
  }
}
</style>
