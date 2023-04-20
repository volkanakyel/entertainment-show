<template>
  <div class="login-page">
    <div class="login-wrapper">
      <div class="login-container">
        <h2 class="login-container__title">Login</h2>
        <input class="login-container__input" placeholder="Email address" type="email" />
        <input class="login-container__input" placeholder="Password" type="password" />
        <button class="login-container__cta">Login to your account</button>
        <div class="login-container__actions">
          <p class="login-container__description">Don’t have an account?</p>
          <a href="" class="login-container__redirect">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
definePageMeta({
  middleware: ["auth"],
});
onMounted(async () => {
  const email = "volkan_akyel@yahoo.fr";
  const password = "123456";
  // const credentials = await createUser(email, password);
  //const credentials = await signInUser(email, password);
  const credentials = await signOutUser();
  console.log(credentials);
});
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
