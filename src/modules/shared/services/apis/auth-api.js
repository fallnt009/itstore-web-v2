import axios from '../config/axios';

export const register = (input) => axios.post('/auth/register', input);

export const login = (input) => axios.post('/auth/login', input);

export const getMyProfile = () => axios.get('/auth/me');

export const updateProfile = (userId, data) =>
  axios.patch(`/users/updateinfo/${userId}`, data);
