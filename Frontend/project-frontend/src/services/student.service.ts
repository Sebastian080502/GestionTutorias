import axios from 'axios';
import { axiosClient } from './axios.service';

export const createStudent = async (data: {
  idUser: string;
  programa: string;
  semestre: string;
}) => {
  try {
    const response = await axiosClient.post('/student', data);
    return response.data;
  } catch (error) {
    console.error('Error al crear estudiante', error);
    throw error;
  }
};

export const getAllStudents = async () => {
  try {
    const response = await axiosClient.get('/student');
    return response.data;
  } catch (error) {
    console.error('Error al obtener estudiantes', error);
    throw error;
  }
};
