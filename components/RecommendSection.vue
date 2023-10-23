<template>
  <div class="trending-section">
    <h2 class="trending-section__title">{{ sectionTitle }}</h2>
    <div class="trending-section__card-list">
      <RecommendCard v-for="(Show, index) in showItems" :key="index" :Show="Show" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { showData } from "@/data/data";
import type { Show } from "~/interfaces/show";

const getRecommendedShow = computed(() => {
  return showData.filter((show) => !show.isTrending);
});

const props = defineProps<{
  sectionTitle: string;
  showItems: Show[];
}>();
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
</style>
