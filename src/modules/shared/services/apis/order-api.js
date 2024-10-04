import axios from '../config/axios';

export const getMyOrder = () => {
  return axios.get('/order/myorder');
};

export const getOrderByNumber = (orderNumber) => {
  return axios.get(`/order/findorder/${orderNumber}`);
};

export const createOrder = (data) => {
  return axios.post('/order/create', data);
};
