<template>
  <div class="trending-section">
    <h2 class="trending-section__title">Recommended for you</h2>
    <div class="trending-section__card-list">
      <div v-for="trendShow in getRecommendedShow" class="trending-section-card">
        <div class="trending-section__save">
          <img class="trending-section__save-icon" src="../assets/img/save-icon.svg" alt="" />
        </div>
        <img
          class="trending-section-card__image"
          :src="trendShow.thumbnail.regular.small"
          :alt="trendShow.title"
        />
        <div class="trending-section-card__description">
          <p>{{ trendShow.year }}</p>
          <div class="trending-section-card__section">
            <img width="12" height="12" :src="getCategoryIcon(trendShow.category)" alt="" />
            <p>{{ trendShow.category }}</p>
          </div>
          <p>{{ trendShow.rating }}</p>
        </div>
        <p class="trending-section-card__title">{{ trendShow.title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { showData } from "../data/data";

const getRecommendedShow = computed(() => {
  return showData.filter((show) => !show.isTrending);
});

const getCategoryIcon = (category: string) => {
  return category === "Movie"
    ? "/_nuxt/assets/img/card-icons/movie.svg"
    : "/_nuxt/assets/img/card-icons/series.svg";
};
</script>

<style lang="scss" scoped>
.trending-section {
  margin-block: 32px;
  &__title {
    margin-bottom: 32px;
    font-weight: 300;
  }
  &__card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    cursor: pointer;
    @media (max-width: 800px) {
      gap: 28px;
    }
  }
  &__save {
    position: absolute;
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 50%;
    background: #10141e;
    opacity: 0.5;
    top: 15px;
    right: 15px;
    &:hover {
      background: $primary-white;
      opacity: 1;
    }
  }
  &__save-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0;
    width: 11px;
  }
}
.trending-section-card {
  position: relative;
  max-width: 280px;
  @media (max-width: 800px) {
    max-width: 220px;
  }
  &__image {
    width: 100%;
    border-radius: 20px;
  }
  &__description {
    display: flex;
    gap: 12px;
    margin-block: 5px;
    font-weight: 300;
    opacity: 0.75;
  }
  &__title {
    font-size: 18px;
    font-weight: 500;
  }
  &__section {
    display: flex;
    align-items: center;
    gap: 6px;
  }
}
</style>
