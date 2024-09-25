import axios from '../config/axios';

export const getMyCart = () => {
  return axios.get('/cart/mycart');
};
export const getCartItemById = (itemId) => {
  return axios.get(`/cart/${itemId}/item`);
};
export const updateCartItem = (itemId, newQty) => {
  return axios.patch(`/cart/${itemId}/item`, {qty: newQty});
};

export const deletecartItem = (itemId) => {
  return axios.delete(`/cart/${itemId}/item`);
};

export const addCartItem = (productId, newQty) => {
  return axios.post(`/cart/${productId}/item`, {qty: newQty});
};
