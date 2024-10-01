import axios from '../config/axios';

export const getMyCheckout = () => {
  return axios.get('/checkout');
};
export const getService = () => {
  return axios.get('/checkout/service');
};
export const getPayment = () => {
  return axios.get('/checkout/payment');
};

export const createCheckout = () => {
  return axios.post('/checkout/');
};
export const updateCheckout = (checkoutId, input) => {
  return axios.patch(`/checkout/${checkoutId}`, input);
};
