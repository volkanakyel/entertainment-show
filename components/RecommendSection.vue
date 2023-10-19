<template>
  <div class="trending-section">
    <h2 class="trending-section__title">Recommended for you</h2>
    <div class="trending-section__card-list">
      <div v-for="trendShow in getRecommendedShow" class="trending-card">
        <div class="trending-section__save">
          <img class="trending-section__save-icon" src="/img/save-icon.svg" alt="" />
        </div>
        <img
          class="trending-card__image"
          :src="trendShow.thumbnail.regular.small"
          :alt="trendShow.title"
        />
        <div class="trending-card__description">
          <p>{{ trendShow.year }}</p>
          <div class="trending-card__section">
            <img width="12" height="12" :src="getCategoryIcon(trendShow.category)" alt="" />
            <p>{{ trendShow.category }}</p>
          </div>
          <p>{{ trendShow.rating }}</p>
        </div>
        <p class="trending-card__title">{{ trendShow.title }}</p>
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
    gap: 32px 40px;
    cursor: pointer;
    @media (max-width: 800px) {
      gap: 28px;
    }
    @media (max-width: 450px) {
      gap: 16px 14px;
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
.trending-card {
  position: relative;
  flex: 1 0 25%;
  height: 100%;
  min-width: 160px;
  max-width: 280px;
  cursor: pointer;
  &:hover {
    transition: opacity 0.1s ease;
    opacity: 0.5;
  }
  &__image {
    object-fit: cover;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
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
