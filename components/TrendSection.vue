<template>
  <div class="trending-section">
    <h2 class="section-title">Trending</h2>
    <div class="trending-section__container">
      <div class="trending-section__wrapper">
        <div
          ref="slider"
          :class="isActive"
          class="trending-section__card-list"
          @mousemove.prevent="mouveMouse"
          @mouseleave="stopDragging"
          @mouseup="stopDragging"
          @mousedown="startDragging"
        >
          <div v-for="trendShow in getTrendingShows" class="trending-section-card">
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
              <img
                class="trending-section-card__save-icon"
                src="../assets/img/save-icon.svg"
                alt=""
              />
            </div>
            <img
              class="trending-section-card__image"
              :src="trendShow.thumbnail.trending?.small"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { showData } from "../data/data";

const getTrendingShows = computed(() => {
  return showData.filter((show) => show.isTrending);
});

const getCategoryIcon = (category: string) => {
  return category === "Movie"
    ? "/_nuxt/assets/img/card-icons/movie.svg"
    : "/_nuxt/assets/img/card-icons/series.svg";
};

const slider = ref<any>();
let isDown = false;
let startX = 0;
let scrollLeft: any;

const isActive = computed(() => {
  return isDown ? "active" : "";
});

const startDragging = function (e: any) {
  isDown = true;
  startX = e.pageX - slider.value.offsetLeft;
  scrollLeft = slider.value.scrollLeft;
};
const stopDragging = function () {
  isDown = false;
};

const mouveMouse = (e: any) => {
  if (!isDown) return;
  const x = e.pageX - slider.value.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.value.scrollLeft = scrollLeft - walk;
};
</script>

<style lang="scss" scoped>
.trending-section {
  margin-top: 24px;
  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr auto;

    //Let the craziness begin!!!
    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
      grid-template-rows: 0.3fr 1fr auto 1fr;
    }
  }
  &__wrapper {
    grid-area: main;

    overflow: hidden;
    color: #fff;
    font-size: 1em;
    width: 100%;
    font-weight: 700;
  }
  &__card-list {
    position: relative;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.2s;
    transform: scale(0.98);
    will-change: transform;
    user-select: none;
    cursor: grab;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
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
.section-title {
  margin-bottom: 32px;
  font-weight: 300;
}
.active {
  background: rgba(255, 255, 255, 0.3);
  cursor: grabbing;
  cursor: -webkit-grabbing;
  transform: scale(1);
}
</style>
