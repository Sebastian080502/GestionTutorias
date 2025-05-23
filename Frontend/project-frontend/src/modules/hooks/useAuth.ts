import { axiosClient } from "@/services/axios.service";
import { create } from "zustand";

interface User {
  firstName: string;
  role: "student" | "teacher";
  email: string;
}

interface AuthState {
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User> & { password: string }) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  currentUser: null,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axiosClient.post("/api/user", { email, password });
      set({ currentUser: response.data, isLoading: false });
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Credenciales incorrectas",
        isLoading: false,
      });
    }
  },

  register: async (userData) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axiosClient.post("/api/tutorial", userData);
      set({ currentUser: response.data, isLoading: false });
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Error al registrar usuario",
        isLoading: false,
      });
    }
  },

  logout: () => {
    set({ currentUser: null });
  },
}));
