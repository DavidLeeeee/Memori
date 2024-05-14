import { create } from "zustand";

export const useLoginModalStore = create((set) => ({
  loginState: 0,
  isLogined: false,
  setLoginModalState: () =>
    // Changed function name to setLoginState
    set((state) => ({ loginState: state.loginState === 0 ? 1 : 0 })), // Updated to modify loginState
}));
