import { defineStore } from "pinia";
import { showData } from "~/data/data";
import { type Show } from "~/interfaces/show";

export const useCategoryStore = defineStore({
  id: "category",
  state: () => {
    return {
      selectedShowCategory: "all" as string,
      selectedShows: showData as Show[],
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
    getSelectedShows: (state): Show[] => {
      if (state.selectedShowCategory === "Series") {
        return state.selectedShows.filter((series) => series.category.includes("Series")) as Show[];
      }
      if (state.selectedShowCategory === "Movie") {
        return state.selectedShows.filter((movies) => movies.category.includes("Movie")) as Show[];
      }
      if (state.selectedShowCategory === "Bookmarked") {
        return state.selectedShows.filter((shows) => shows.isBookmarked) as Show[];
      } else {
        return state.selectedShows as Show[];
      }
    },
    getTrendingShows: (state): Show[] =>
      state.selectedShows.filter((show) => show.isTrending) as Show[],
  },
  actions: {
    switchShowCategory(value: string): void {
      this.selectedShowCategory = value;
    },
    filterShows(value: string): Show[] {
      return this.getSelectedShows.filter((show) =>
        show.title.toLocaleLowerCase().includes(value.toLowerCase())
      );
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategoryStore, import.meta.hot));
}
