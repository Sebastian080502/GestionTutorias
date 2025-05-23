import { create } from "zustand";
import { createUser, getAllUser } from "@/services/user.service";

export type User = {
  id: string;
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  email: string;
  password: string;
  role: "student" | "teacher";
};

interface UserStore {
  currentUser: User | null;
  users: User[];
  isLoading: boolean;
  error: string | null;
  setCurrentUser: (user: User) => void;
  createUser: (data: Partial<User>) => Promise<User | null>;
  fetchUsers: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  currentUser: null,
  users: [],
  isLoading: false,
  error: null,

  setCurrentUser: (user) => set({ currentUser: user }),

  createUser: async (data) => {
    set({ isLoading: true, error: null });

    try {
      const response = await createUser(data);
      const { data: updatedUsers } = await getAllUser();
      set({ users: updatedUsers, isLoading: false });

      return response;
    } catch (error: any) {
      set({ error: error.message || "Error al crear usuario", isLoading: false });
      console.error("Error al crear usuario:", error);
      return null;
    }
  },

  fetchUsers: async () => {
    set({ isLoading: true, error: null });

    try {
      const { data } = await getAllUser();
      set({ users: data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message || "Error al obtener usuarios", isLoading: false });
      console.error("Error al obtener usuarios:", error);
    }
  },
}));