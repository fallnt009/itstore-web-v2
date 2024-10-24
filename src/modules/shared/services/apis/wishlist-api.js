import axios from '../config/axios';

export const getMyWishlist = (page, pageSize) =>
  axios.get(`/wishlist/me`, {
    params: {page, pageSize},
  });

export const getInWishlist = () => axios.get(`/wishlist/in`);

export const addWishlist = (productId) => axios.post(`/wishlist/${productId}`);

export const deleteWishlist = (productId) =>
  axios.delete(`/wishlist/${productId}`);
