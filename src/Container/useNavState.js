import { create } from "zustand";

export const useNavStore = create((set) => ({
  navState: 0,
  setNavStore: () =>
    set((state) => ({ navState: state.navState === 0 ? 1 : 0 })),
}));
