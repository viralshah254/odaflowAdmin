import create from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: Boolean(localStorage.getItem("odaflow_token")),
  login: async (email: string, password: string) => {
    // Placeholder: replace with real API call
    // e.g. const { token } = await api.post("/auth/login", { email, password });
    const token = "dummy-token";
    localStorage.setItem("odaflow_token", token);
    set({ isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem("odaflow_token");
    set({ isAuthenticated: false });
  },
}));
