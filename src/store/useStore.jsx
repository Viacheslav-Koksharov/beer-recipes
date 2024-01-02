import { create } from 'zustand';

const useStore = create((set, get) => ({
  recipes: [],
  selectedRecipes: [],
  loading: false,
  error: null,
  numPage: 1,
  
  selectRecipe: recipe => {
    const selectedRecipes = [...get().selectedRecipes, recipe];
    set({ selectedRecipes });
  },

  unselectedRecipe: recipe => {
    const selectedRecipes = get().selectedRecipes.filter(
      item => item.id !== recipe.id,
    );
    set({ selectedRecipes });
  },

  removeSelectedRecipes: () => {
    const recipes = get().recipes.filter(
      recipes => !get().selectedRecipes.includes(recipes),
    );
    const selectedRecipes = [];
    set({ recipes, selectedRecipes });
  },

  nextPage: () => {
    const numPage = get().numPage + 1;
    set({ numPage });
  },

  prevPage: () => {
    const numPage = get().numPage - 1;
    set({ numPage });
  },

  async fetchRecipes() {
    set({ loading: true });
    try {
      const numPage = get().numPage;
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${numPage}`,
      );
      if (!response.ok) throw response;
      set({ recipes: await response.json(), numPage: numPage });
    } catch (e) {
      let error = e;
      if (e.statusCode === 400) {
        error = await e.json();
      }
      set({ error });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useStore;
