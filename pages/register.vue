<template>
  <div class="register-page">
    <div class="register-wrapper">
      <div class="register-container">
        <h2 class="register-container__title">Sign up</h2>
        <input class="register-container__input" placeholder="Email address" type="email" />
        <input class="register-container__input" placeholder="Password" type="password" />
        <input class="register-container__input" placeholder="Retype Password" type="password" />
        <button class="register-container__cta">register to your account</button>
        <div class="register-container__actions">
          <p class="register-container__description">Already have an account?</p>
          <a href="" class="register-container__redirect">Login</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.register-page {
  position: relative;
  height: 100vh;
}
.register-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-container {
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
