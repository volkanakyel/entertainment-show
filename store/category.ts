import { defineStore } from "pinia";
export const useCategoryStore = defineStore({
  id: "category",
  state: () => {
    return {
      selectedShowCategory: "all" as string,
    };
  },
  getters: {
    getCategoryToShow: (state) => state.selectedShowCategory,
  },
  actions: {
    switchShowCategory(value: string): void {
      this.selectedShowCategory = value;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategoryStore, import.meta.hot));
}
