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

//get All Brand
export const getAllBrand = () => axios.get('/categories/brand');

//get BrandTag
export const getBrandTag = (brandId, page) =>
  axios.get(`/categories/brandtag/${brandId}`, {params: {page}});

//create
export const createProduct = (bcsId, data) =>
  axios.post(`/products/create/${bcsId}`, data);
