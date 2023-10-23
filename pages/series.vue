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
        />
      </div>
      <RecommendSection :showItems="getSeries" :sectionTitle="'Series'" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import type { RecommendedShow } from "~/interfaces/show";
import { useCategoryStore } from "~/store/category";

const store = useCategoryStore();
const fetchSeries = () => {
  store.fetchSeries();
};

onMounted(() => {
  fetchSeries();
});
const getSeries = computed((): RecommendedShow[] => store.getSeriesShows);
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
