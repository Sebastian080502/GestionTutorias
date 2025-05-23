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
  login: (email: string, password: string, role: string) => Promise<void>;
  register: (userData: Partial<User> & { password: string }) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  currentUser: null,
  isLoading: false,
  error: null,

  login: async (email, password, role) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axiosClient.post("/user/login", { email, password, role });
      set({ currentUser: response.data, isLoading: false });
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Error al iniciar sesión";
      set({
        error: err.response?.data?.message || "Credenciales incorrectas",
        isLoading: false,
      });
      throw new Error(errorMessage);
    }
  },

  register: async (userData) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axiosClient.post("/tutorial", userData);
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
