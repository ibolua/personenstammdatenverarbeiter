import { create } from "zustand";

const useStore = create((set, get) => ({
  persons: [],
  setPersons: (persons) => set({ persons }),
  address: [],
  setAddress: (address) => set({ address }),
}));

export { useStore };
