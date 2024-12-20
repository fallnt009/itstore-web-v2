import axios from '../config/axios';

export const register = (input) => axios.post('/auth/register', input);

export const login = (input) => axios.post('/auth/login', input);

export const getMyProfile = () => axios.get('/auth/me');

export const updateProfile = (userId, data) =>
  axios.patch(`/users/updateinfo/${userId}`, data);

export const updateProfileImage = (userId, data) =>
  axios.patch(`/users/updateimg/${userId}`, data);

//
export const updatePassword = (data) => axios.patch(`/auth/updatepa`, data);
