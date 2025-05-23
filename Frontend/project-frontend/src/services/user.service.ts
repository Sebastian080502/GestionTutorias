import { axiosClient } from "./axios.service";

export const getAllUser = async () => {
  const response = await axiosClient.get('/user');
  return response.data;
};

export const createUser = async (data: any) => {
  const response = await axiosClient.post('/user', data);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axiosClient.delete(`/user/${id}`);
  return response.data;
};
