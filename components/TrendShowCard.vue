<template>
  <div class="trending-section-card" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
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
    <div class="trending-section-card__play-button" v-if="isHovered">
      <img src="../public/img/play-icon.svg" alt="Play" />
      <span>Play</span>
    </div>
    <div class="trending-section-card__save">
      <img class="trending-section-card__save-icon" src="/img/save-icon.svg" alt="" />
    </div>
    <nuxt-img
      class="trending-section-card__image"
      :src="trendShow.thumbnail.trending?.small"
      alt=""
      loading="lazy"
    />
  </div>
</template>

<script lang="ts" setup>
import { type Show } from "../interfaces/show";

defineProps<{
  trendShow: Show;
}>();
const isHovered = ref(false);
</script>

<style lang="scss" scoped>
.trending-section-card {
  position: relative;
  display: inline-block;
  &:not(:first-child) {
    margin-left: 40px;
  }
  &:hover {
    &__play-button {
      display: flex;
    }
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
  &__play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 8px 12px;
    border-radius: 25px;
    z-index: 2;
    img {
      margin-right: 12px;
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
  &:hover {
    transition: opacity 0.1s ease;
    opacity: 0.5;
  }
}
</style>
