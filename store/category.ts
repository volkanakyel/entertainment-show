import { defineStore } from "pinia";
import { showData } from "~/data/data";
import { type RecommendedShow } from "~/interfaces/show";

export const useCategoryStore = defineStore({
  id: "category",
  state: () => {
    return {
      selectedShowCategory: "all" as string,
      seriesShow: [] as RecommendedShow[],
    };
  },
  getters: {
    getCategoryToShow: (state) => state.selectedShowCategory,
    getSeriesShows: (state) => state.seriesShow,
  },
  actions: {
    switchShowCategory(value: string): void {
      this.selectedShowCategory = value;
    },
    fetchSeries(): void {
      this.seriesShow = showData.filter((series) =>
        series.category.includes("Series")
      ) as RecommendedShow[];
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategoryStore, import.meta.hot));
}
