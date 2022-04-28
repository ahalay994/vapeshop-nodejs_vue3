<template>
  <h1>Users</h1>

  <div>
    <Form
        @submit="onSubmit"
        :validation-schema="() => {}"
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

      <button class="submit-btn" type="submit">Submit</button>
    </Form>
  </div>

</template>

<script>
import { Form } from "vee-validate";
import { toFormValidator } from '@vee-validate/zod';
import * as zod from 'zod';
import TextInput from "../../components/Form/TextInput";

export default {
  name: "Users",
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
};
</script>

<style>
* {
  box-sizing: border-box;
}

:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  width: 100%;
}

form {
  width: 300px;
  margin: 0px auto;
  padding-bottom: 60px;
}

.submit-btn {
  background: var(--primary-color);
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  width: 100%;
  border-radius: 7px;
  margin-top: 40px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.submit-btn.invalid {
  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }
  10% {
    transform: translate(-1px, -2px);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  30% {
    transform: translate(3px, 2px);
  }
  40% {
    transform: translate(1px, -1px);
  }
  50% {
    transform: translate(-1px, 2px);
  }
  60% {
    transform: translate(-3px, 1px);
  }
  70% {
    transform: translate(3px, 1px);
  }
  80% {
    transform: translate(-1px, -1px);
  }
  90% {
    transform: translate(1px, 2px);
  }
  100% {
    transform: translate(1px, -2px);
  }
}

.submit-btn:hover {
  transform: scale(1.1);
}
</style>
