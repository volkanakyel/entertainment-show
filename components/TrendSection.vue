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
          <div class="trending-section-card">
            <img src="../assets/img/thumbnails/beyond-earth/trending/small.jpg" alt="" />
          </div>
          <div class="trending-section-card">
            <img src="../assets/img/thumbnails/1998/trending/small.jpg" alt="" />
          </div>
          <div class="trending-section-card">
            <img src="../assets/img/thumbnails/1998/trending/small.jpg" alt="" />
          </div>
          <div class="trending-section-card">
            <img src="../assets/img/thumbnails/1998/trending/small.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
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
const stopDragging = function (event: any) {
  isDown = false;
};

const mouveMouse = (e: any) => {
  if (!isDown) return;
  const x = e.pageX - slider.value.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.value.scrollLeft = scrollLeft - walk;
};
onMounted(() => {
  console.log(slider);
});
</script>

<style lang="scss" scoped>
.trending-section {
  margin-top: 32px;
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
  }
}
.trending-section-card {
  &:not(:first-child) {
    margin: 2em 1em;
  }
  display: inline-block;
  img {
    border-radius: 20px;
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
