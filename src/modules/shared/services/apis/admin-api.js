import axios from '../config/axios';

//All product
export const getAllProduct = (page, pageSize, sorts, filters, search) =>
  axios.get('/products/all', {
    params: {
      page,
      pageSize,
      sorts: JSON.stringify(sorts),
      filters: JSON.stringify(filters),
      search,
    },
  });
//get product by id
export const getProductById = (productId) =>
  axios.get(`/products/${productId}`);

//get All Brand for Select
export const getAllBrand = () =>
  axios.get('/categories/brand', {
    params: {all: true},
  });

//get BrandTag
export const getBrandTag = (brandId, page) =>
  axios.get(`/categories/brandtag/${brandId}`, {params: {page}});

//crud product
export const createProduct = (bcsId, data) =>
  axios.post(`/products/create/${bcsId}`, data);
export const updateProduct = (productId, data) =>
  axios.patch(`/products/${productId}`, data);
export const deleteProduct = (productId) =>
  axios.delete(`/products/${productId}`);

//Category Api
export const getBrand = (page) =>
  axios.get('/categories/brand', {params: {page}});
export const getCategory = (page) =>
  axios.get('/categories/category', {params: {page}});
export const getSubCategory = (page) =>
  axios.get('/categories/sub-category', {params: {page}});
