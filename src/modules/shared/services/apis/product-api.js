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
  axios.get(`/products/categories/${categorySlug}/${subCategorySlug}`, {
    params: {page, pageSize, search, filters},
  });

//PRODUCT FILTER & PRODUCT INFO

export const getSpecItems = (subCategorySlug, title) =>
  axios.get(`/products/spec-items/sub/${subCategorySlug}`, {
    params: {title},
  });
export const getSpecProduct = (subCategorySlug) =>
  axios.get('/products/specproduct/filter', {params: {subCategorySlug}});

//PRODUCT INFO
export const getProductInfo = (categorySlug, subCategorySlug, productSlug) =>
  axios.get(
    `/products/categories/${categorySlug}/${subCategorySlug}/${productSlug}`
  );

export const getSpecText = (productId) =>
  axios.get(`/products/subspec/public/${productId}`);
