import axios from '../config/axios';

export const getMyWishlist = (page, pageSize) =>
  axios.get(`/wish/mywishlist`, {
    params: {page, pageSize},
  });

export const addWishlist = (productId) =>
  axios.post(`/wish/${productId}/wishlist`);

export const deleteWishlist = (productId) =>
  axios.delete(`/wish/${productId}/wishlist`);
