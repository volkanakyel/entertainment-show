import { defineStore } from "pinia";
import { showData } from "~/data/data";
import { type RecommendedShow } from "~/interfaces/show";

export const useCategoryStore = defineStore({
  id: "category",
  state: () => {
    return {
      selectedShowCategory: "all" as string,
      selectedShows: showData as RecommendedShow[],
      hasTrendingShows: true as boolean,
    };
  },
  getters: {
    getCategoryToShow: (state): string => state.selectedShowCategory,
    getCategoryName: (state): string => {
      if (state.selectedShowCategory === "Movie") return "Movies";
      if (state.selectedShowCategory === "Series") return "TV Series";
      if (state.selectedShowCategory === "Bookmarked") return "Bookmarked";
      else return "Trending";
    },
    showTrendingShows: (state): boolean => (state.selectedShowCategory === "all" ? true : false),
    getSelectedShows: (state): RecommendedShow[] => {
      if (state.selectedShowCategory === "Series") {
        return state.selectedShows.filter((series) =>
          series.category.includes("Series")
        ) as RecommendedShow[];
      }
      if (state.selectedShowCategory === "Movie") {
        return state.selectedShows.filter((movies) =>
          movies.category.includes("Movie")
        ) as RecommendedShow[];
      }
      if (state.selectedShowCategory === "Bookmarked") {
        return state.selectedShows.filter((shows) => shows.isBookmarked) as RecommendedShow[];
      } else {
        return state.selectedShows as RecommendedShow[];
      }
    },
  },
  actions: {
    switchShowCategory(value: string): void {
      this.selectedShowCategory = value;
    },
    filterShows(value: string): RecommendedShow[] {
      return this.selectedShows.filter((show) =>
        show.title.toLocaleLowerCase().includes(value.toLowerCase())
      );
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategoryStore, import.meta.hot));
}
