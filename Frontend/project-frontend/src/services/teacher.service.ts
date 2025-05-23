import axios from 'axios';
import { axiosClient } from './axios.service';

export const createTeacher = async (data: {
  idUser: string;
  especialidad: string;
  disponibilidad: string;
}) => {
  try {
    const response = await axiosClient.post('/teacher', data);
    return response.data;
  } catch (error) {
    console.error('Error al crear docente', error);
    throw error;
  }
};

export const getAllTeachers = async () => {
  try {
    const response = await axiosClient.get('/teacher');
    return response.data;
  } catch (error) {
    console.error('Error al obtener docentes', error);
    throw error;
  }
};