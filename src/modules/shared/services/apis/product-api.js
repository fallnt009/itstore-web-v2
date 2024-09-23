import axios from '../config/axios';

//NEW & SALES PRODUCT
export const getNewProduct = (page, pageSize) =>
  axios.get('/products/new', {params: {page, pageSize}});
export const getSalesProduct = (page, pageSize) =>
  axios.get('/products/sales', {params: {page, pageSize}});

//PRODUCT LISTS
export const getProductList = (
  categorySlug,
  subCategorySlug,
  page,
  pageSize,
  search,
  filters
) =>
  axios.get(`/categories/product/${categorySlug}/${subCategorySlug}`, {
    params: {page, pageSize, search, filters},
  });

//PRODUCT FILTER

export const getSpecItems = (title, subCategorySlug) =>
  axios.get(`/products/spec-items/subcategory/${subCategorySlug}`, {
    params: {title},
  });
export const getSpecProduct = (subCategorySlug) =>
  axios.get('/products/specproduct/filter', {params: {subCategorySlug}});
