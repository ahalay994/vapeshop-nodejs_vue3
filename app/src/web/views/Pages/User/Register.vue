<template>
  <div>
    <Form
        @submit="onSubmit"
        :validation-schema="validationSchema"
    >
      <TextInput
          name="name"
          type="text"
          label="Имя"
          placeholder="Введите имя"
          success-message=""
      />
      <TextInput
          name="email"
          type="email"
          label="E-mail"
          placeholder="Введите email адрес"
          success-message=""
      />
      <TextInput
          name="password"
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
          success-message=""
      />
      <TextInput
          name="confirm_password"
          type="password"
          label="Подтверждение пароля"
          placeholder="Повторно введите пароль"
          success-message=""
      />

      <button class="submit-btn" type="submit">Зарегистрироваться</button>
    </Form>
  </div>
</template>

<script>
import { Form } from "vee-validate";
import { toFormValidator } from '@vee-validate/zod';
import * as zod from 'zod';
import TextInput from "../../Components/TextInput";

export default {
  name: "Register",
  components: {
    TextInput,
    Form,
  },

  setup() {
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }

    const validationSchema = toFormValidator(
        zod.object({
          name: zod.string().nonempty('Поле обязательно к заполнению').min(2, { message: 'Минимальное количество символов: 2' }),
          email: zod.string().nonempty('Поле обязательно к заполнению').email({ message: 'Введите корректный email' }),
          password: zod.string().nonempty('Поле обязательно к заполнению').min(8, { message: 'Введите минимум 8 символов' }),
          confirm_password: zod.string().nonempty('Пароли не совпадают')
        })
            .refine(data => data.confirm_password === data.password, {
              message: 'Пароли не совпадают',
              path: ['confirm_password'],
            })
    );


    return {
      onSubmit,
      validationSchema,
    };
  },
}
</script>

<style lang="scss" src="../../../styles/Pages/Register.scss" />
