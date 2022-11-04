import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { StoreData } from "@/hooks/useStoreData";

import axios from "axios";

export const useItemStore = defineStore({
  id: "itemStore",
  state: () => ({
    items: [] as StoreData[],
  }),

  getters: {
    totalItems: (state) => state.items.length,
  },

  actions: {
    addItems(title: string, type: string, price: number, stock: number, description: string) {
      const item: StoreData = {
        id: 0,
        title,
        type,
        price,
        stock,
        description,
      };
      this.items = [item, ...this.items];
    },

    async removeStore(id: number) {
      // example of an async request
      const response = await axios.get(
        "http://127.0.0.1:8000/api/items",
      );
      console.log("received data ", response.data);

      // remove todos
      this.items = this.items.filter((item) => item.id !== id);
    },

  },
  
});
