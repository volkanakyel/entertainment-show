<template>
  <div class="login-page">
    <div class="login-wrapper">
      <div class="login-container">
        <h2 class="login-container__title">Login</h2>
        <input
          v-model="loginForm.email"
          class="login-container__input"
          placeholder="Email address"
          type="email"
        />
        <input
          v-model="loginForm.password"
          class="login-container__input"
          placeholder="Password"
          type="password"
        />
        <button @click="signIn" class="login-container__cta">Login to your account</button>
        <div class="login-container__actions">
          <p class="login-container__description">Don’t have an account?</p>
          <nuxt-link class="login-container__redirect" to="/register">Sign up</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const loginForm = ref({
  email: "",
  password: "",
});
const signIn = async () => {
  signInUser(loginForm.value.email, loginForm.value.password);
  loginForm.value = {
    email: "",
    password: "",
  };
};
</script>

<style lang="scss" scoped>
.login-page {
  position: relative;
  height: 100vh;
}
.login-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-container {
  background-color: $semi-dark-blue;
  padding: 32px;
  border-radius: 20px;
  &__title {
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 40px;
  }
  &__input {
    &:not(:first-child) {
      margin-bottom: 24px;
    }
    &:focus {
      background-color: $semi-dark-blue;
    }
    display: block;
    width: 336px;
    border: none;
    padding: 16px;
    background-color: $semi-dark-blue;
    outline: none;
    border-bottom: 1px solid $primary-white;
    color: $primary-white;
  }
  &__cta {
    margin-top: 16px;
    text-align: center;
    color: $primary-white;
    width: 100%;
    border: none;
    padding: 14px;
    background-color: $primary-red;
    border-radius: 6px;
    &:hover {
      background-color: $primary-white;
      color: $semi-dark-blue;
    }
  }
  &__actions {
    margin-top: 24px;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__redirect {
    text-decoration: none;
    color: $primary-red;
    font-weight: 300;
  }
}
</style>
