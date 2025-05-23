import axios from 'axios';

export const createTeacher = async (data: {
  idUser: string;
  especialidad: string;
  disponibilidad: string;
}) => {
  try {
    const response = await axios.post('/api/teacher', data);
    return response.data;
  } catch (error) {
    console.error('Error al crear docente', error);
    throw error;
  }
};

export const getAllTeachers = async () => {
  try {
    const response = await axios.get('/api/teacher');
    return response.data;
  } catch (error) {
    console.error('Error al obtener docentes', error);
    throw error;
  }
};