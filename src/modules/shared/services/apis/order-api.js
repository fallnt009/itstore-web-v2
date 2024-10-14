import axios from '../config/axios';

export const getMyOrder = (page, pageSize, filter) => {
  return axios.get('/order/myorder', {params: {page, pageSize, filter}});
};

export const getOrderByNumber = (orderNumber) => {
  return axios.get(`/order/findorder/${orderNumber}`);
};

export const createOrder = (data) => {
  return axios.post('/order/create', data);
};
