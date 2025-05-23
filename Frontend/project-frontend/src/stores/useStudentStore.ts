import { create } from 'zustand';
import { createStudent, getAllStudents } from '@/services/student.service';

export type Student = {
  id: string;
  idUser: string;
  programa: string;
  semestre: string;
};

interface StudentStore {
  students: Student[];
  fetchStudents: () => Promise<void>;
  addStudent: (data: Omit<Student, 'id'>) => Promise<void>;
}

export const useStudentStore = create<StudentStore>((set) => ({
  students: [],

  fetchStudents: async () => {
    const data = await getAllStudents();
    set({ students: data });
  },

  addStudent: async (data) => {
    await createStudent(data);
    const updated = await getAllStudents();
    set({ students: updated });
  },
}));