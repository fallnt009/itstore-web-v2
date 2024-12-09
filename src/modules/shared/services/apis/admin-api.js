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

//get All Brand
export const getAllBrand = () => axios.get('/categories/brand');

//get BrandTag
export const getBrandTag = (brandId, page) =>
  axios.get(`/categories/brandtag/${brandId}`, {params: {page}});
