<template>
  <div class="trending-card" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <div class="trending-card__image-container">
      <div class="trending-card__save">
        <img class="trending-card__save-icon" src="/img/save-icon.svg" alt="" />
      </div>
      <div class="trending-card__play-button" v-if="isHovered">
        <img src="../public/img/play-icon.svg" alt="Play" />
        <span>Play</span>
      </div>
      <img class="trending-card__image" :src="Show.thumbnail.regular.small" :alt="Show.title" />
    </div>
    <div class="trending-card__description">
      <p>{{ Show.year }}</p>
      <div class="trending-card__section">
        <img width="12" height="12" :src="getCategoryIcon(Show.category)" alt="" />
        <p>{{ Show.category }}</p>
      </div>
      <p>{{ Show.rating }}</p>
    </div>
    <p class="trending-card__title">{{ Show.title }}</p>
  </div>
</template>

<script lang="ts" setup>
import { type Show } from "../interfaces/show";
defineProps<{
  Show: Show;
}>();
const isHovered = ref(false);
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
    &__play-button {
      display: flex;
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
  &__image-container {
    position: relative;
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
