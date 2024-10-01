import axios from '../config/axios';

export const getMyAddress = () => axios.get('/address/myaddress');

export const createAddress = (input) => axios.post('/address', input);

export const updateDefault = (addressId) =>
  axios.patch(`/address/default/${addressId}`);

export const updateAddress = (addressId, input) =>
  axios.patch(`/address/${addressId}`, input);

export const deleteAddress = (addressId) =>
  axios.delete(`/address/${addressId}`);
