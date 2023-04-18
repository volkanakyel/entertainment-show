<template>
  <div class="trending-section">
    <h2 class="section-title">Recommended for you</h2>
    <div class="trending-section__card-list">
      <div v-for="trendShow in getRecommendedShow" class="trending-section-card">
        <img
          class="trending-section-card__image"
          :src="trendShow.thumbnail.regular.small"
          :alt="trendShow.title"
        />
        <div class="trending-section-card__description">
          <p>{{ trendShow.year }}</p>
          <div class="trending-section-card__section">
            <img src="../assets/img/movie-icon.svg" alt="" />
            <p>{{ trendShow.category }}</p>
          </div>
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
</script>

<style lang="scss" scoped>
.trending-section {
  margin-block: 32px;
  &__card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    cursor: pointer;
  }
}
.trending-section-card {
  max-width: 280px;
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
.section-title {
  margin-bottom: 32px;
  font-weight: 300;
}
</style>
