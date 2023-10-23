<template>
  <div class="side-navbar">
    <div class="side-navbar__container">
      <div class="side-navbar__nav-items">
        <img class="side-navbar__logo" src="/img/logo.svg" @click="redirectHome" alt="" />
        <img class="side-navbar__nav-icon" @click="redirectHome" src="/img/menu-icon.svg" alt="" />
        <img
          class="side-navbar__nav-icon"
          src="/img/movie-icon.svg"
          @click="redirectToMovies"
          alt=""
        />
        <img
          class="side-navbar__nav-icon"
          src="/img/series-icon.svg"
          @click="redirectToSeries"
          alt=""
        />
        <img
          class="side-navbar__nav-icon"
          src="/img/save-icon.svg"
          @click="redirectToBookmarked"
          alt=""
        />
      </div>
      <div class="side-navbar__avatar">
        <img src="/img/avatar.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCategoryStore } from "~/store/category";
const setShowCategory = (category: string) => {
  console.log(category);
  useCategoryStore().switchShowCategory(category);
};
const router = useRouter();
const redirectToMovies = (): void => {
  router.push("/movies");
};

const redirectHome = (): void => {
  router.push("/");
};

const redirectToSeries = (): void => {
  router.push("/series");
};

const redirectToBookmarked = (): void => {
  router.push("/bookmarked");
};
</script>

<style scoped lang="scss">
.side-navbar {
  margin: 32px;
  top: 0;
  padding: 32px 24px;
  border-radius: 20px;
  background-color: $semi-dark-blue;
  height: 85vh;
  max-height: 960px;
  @media (max-width: 800px) {
    height: auto;
  }
  @media (max-width: 450px) {
    margin: 0;
    border-radius: 0;
  }
  &__logo {
    width: 32px;
    height: 25px;
    cursor: pointer;
  }
  &__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 800px) {
      flex-direction: row;
    }
  }
  &__nav-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:hover {
      fill: #ffff;
    }
  }
  &__nav-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    @media (max-width: 800px) {
      flex-direction: row;
      gap: 24px;
    }
  }
}
</style>
