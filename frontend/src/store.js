import { create } from "zustand";

const useStore = create((set, get) => ({
  persons: [],
  setPersons: (persons) => set({ persons }),
  setSnacks: (snacks) => set({ snacks }),
}));

export { useStore };
