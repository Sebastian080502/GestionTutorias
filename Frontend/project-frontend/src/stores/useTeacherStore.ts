import { create } from 'zustand';
import { createTeacher, getAllTeachers } from '@/services/teacher.service';

export type Teacher = {
  id: string;
  idUser: string;
  especialidad: string;
  disponibilidad: string;
};

interface TeacherStore {
  teachers: Teacher[];
  fetchTeachers: () => Promise<void>;
  addTeacher: (data: Omit<Teacher, 'id'>) => Promise<void>;
}

export const useTeacherStore = create<TeacherStore>((set) => ({
  teachers: [],

  fetchTeachers: async () => {
    const data = await getAllTeachers();
    set({ teachers: data });
  },

  addTeacher: async (data) => {
    await createTeacher(data);
    const updated = await getAllTeachers();
    set({ teachers: updated });
  },
}));