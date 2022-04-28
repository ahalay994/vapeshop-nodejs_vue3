<template>
  <form id="register">
    <InputForm
        type-field="text"
        label="Имя" name="name"
        placeholder="Введите имя"
        v-model="name"
        :error="error.name"
        :is-required="true"
    />

    <InputForm
        type-field="text"
        label="Логин"
        name="login"
        placeholder="Введите логин"
        v-model="login"
        :error="error.login"
        :is-required="true"
    />

    <InputForm
        type-field="password"
        label="Пароль"
        name="password"
        placeholder="Введите пароль"
        v-model="password"
        :error="error.password"
        :is-required="true"
    />

    <InputForm
        type-field="password"
        label="Подтверждение пароля"
        name="password-repeat"
        placeholder="Повторно введите пароль"
        v-model="passwordRepeat"
        :error="error.passwordRepeat"
        :is-required="true"
    />

    <input @click.prevent="submit" type="submit" value="Зарегистрироваться" />
  </form>
</template>

<script>
import { ref } from "vue";

import InputForm from "@/admin/components/Form/InputForm";
import { getAllUsers, createUser, checkUser } from '../../services/UserService'

export default {
  name: "Form",
  components: {
    InputForm,
  },
  data() {
    return {
      error: {
        name: null,
        login: null,
        password: null,
        passwordRepeat: null,
      }
    }
  },
  setup() {
    const name = ref("");
    const login = ref("");
    const password = ref("");
    const passwordRepeat = ref("");
    return { name, login, password, passwordRepeat };
  },

  watch: {
    login: {
      handler(val) {
        if (val.length > 0) {
          checkUser(val).then(response => {
            console.log('response', response);
            if (response.status === 'error') {
              this.error.login = 'Логин занят'
            }
            else {
              this.error.login = null;
            }
          })
        }
        else {
          this.error.login = null;
        }
      }
    },
    passwordRepeat: {
      handler(val) {
        if (this.password !== val) this.error.passwordRepeat = 'Пароли не совпадают'; else this.error.passwordRepeat = null
      }
    }
  },

  methods: {
    submit() {
      const data = { name: this.name, login: this.login, password: this.password, passwordRepeat: this.passwordRepeat };
      createUser(data).then(response => {
        console.log(response);
      });
    },
  }
}
</script>
