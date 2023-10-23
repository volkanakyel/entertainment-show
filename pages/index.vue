<template>
  <div class="main-container">
    <div class="navbar">
      <SideNavbar />
    </div>
    <div class="show-container">
      <div class="search-input">
        <img class="search-input__icon" src="/img/search-icon.svg" alt="" />
        <input
          class="search-input__field"
          type="text"
          placeholder="Search for movies or TV series"
          v-model="searchShows"
        />
      </div>
      <TrendSection v-if="showTrendingShows" />
      <RecommendSection :showItems="getFilteredShows" :sectionTitle="getCategoryName" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { RecommendedShow } from "~/interfaces/show";
import { useCategoryStore } from "~/store/category";
const searchShows = ref("");
const store = useCategoryStore();
const showTrendingShows = computed((): boolean => store.showTrendingShows);
const getCategoryName = computed((): string => store.getCategoryName);
const getFilteredShows = computed((): RecommendedShow[] => store.filterShows(searchShows.value));
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
}

.show-container {
  flex: 1 1 auto; /* Positive flex-shrink */
  @media (max-width: 800px) {
    margin: 32px;
  }
}
.log-container {
  color: $primary-white;
}
</style>
