<template>
  <div class="trending-section-card">
    <div class="trending-section-card__content">
      <div class="trending-section-card__description">
        <p>{{ trendShow.year }}</p>
        <div class="trending-section-card__section">
          <img width="12" height="12" :src="getCategoryIcon(trendShow.category)" alt="" />
          <p>{{ trendShow.category }}</p>
        </div>
        <p>{{ trendShow.rating }}</p>
      </div>
      {{ trendShow.title }}
    </div>
    <div class="trending-section-card__save">
      <img class="trending-section-card__save-icon" src="/img/save-icon.svg" alt="" />
    </div>
    <img class="trending-section-card__image" :src="trendShow.thumbnail.trending?.small" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { TrendingShow } from "@/interfaces/show";

defineProps<{
  trendShow: TrendingShow;
}>();
</script>

<style lang="scss" scoped>
.trending-section-card {
  position: relative;
  display: inline-block;
  &:not(:first-child) {
    margin-left: 40px;
  }
  &__content {
    position: absolute;
    left: 16px;
    bottom: 16px;
    &:hover {
      color: $primary-white;
      opacity: 1;
    }
  }
  &__description {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 6px;
  }
  &__section {
    gap: 6px;
    display: flex;
    align-items: center;
  }
  &__image {
    border-radius: 20px;
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
  &:hover {
    transition: opacity 0.1s ease;
    opacity: 0.5;
  }
}
</style>
