import axios from '../config/axios';

//NEW & SALES PRODUCT
export const getNewProduct = (page, pageSize) =>
  axios.get('/products/new', {params: {page, pageSize}});
export const getSalesProduct = (page, pageSize) =>
  axios.get('/products/sales', {params: {page, pageSize}});
