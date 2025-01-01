import {createContext, useReducer, useCallback} from 'react';
import adminReducer, {
  INIT_ADMIN,
  FETCH_PRODUCT_OVERVIEW,
  FETCH_CATEGORY_TAG,
  FETCH_ALL_BRAND,
  FETCH_CATEGORY,
  FETCH_ALL_CATEGORY,
  FETCH_ALL_ORDER,
} from './AdminReducer';

import * as AdminApi from '../../../shared/services/apis/admin-api';

const AdminContext = createContext();

export default function AdminContextProvider({children}) {
  const [AllAdmin, dispatch] = useReducer(adminReducer, INIT_ADMIN);

  const fetchAllProduct = useCallback(
    async (page, pageSize, sorts, filters, search) => {
      try {
        const res = await AdminApi.getAllProduct(
          page,
          pageSize,
          sorts,
          filters,
          search
        );
        dispatch({
          type: FETCH_PRODUCT_OVERVIEW,
          payload: {
            items: res.data.result,
            itemsFilter: res.data.result,
            totalItems: res.data.totalItems,
            totalPages: res.data.totalPages,
            currentPage: res.data.currentPage,
          },
        });
      } catch (err) {
        throw err;
      }
    },
    []
  );

  const fetchAllBrand = useCallback(async () => {
    try {
      const res = await AdminApi.getAllBrand();
      dispatch({
        type: FETCH_ALL_BRAND,
        payload: {
          brandItems: res.data.result,
        },
      });
    } catch (err) {
      throw err;
    }
  }, []);

  const fetchBrandCategorySub = useCallback(async (brandId, page) => {
    try {
      const res = await AdminApi.getBrandTag(brandId, page);
      dispatch({
        type: FETCH_CATEGORY_TAG,
        payload: {
          items: res.data.result,
          totalItems: res.data.totalItems,
          totalPages: res.data.totalPages,
          currentPage: res.data.currentPage,
        },
      });
    } catch (err) {
      throw err;
    }
  }, []);

  const fetchProductById = useCallback(async (productId) => {
    try {
      const res = await AdminApi.getProductById(productId);

      const productData = res.data.result;

      return {
        data: productData,
        images: productData.ProductImages,
        keys: {
          brandId:
            productData.ProductSubCategory.BrandCategorySub.BrandCategory
              .brandId,
          bcsId: productData.ProductSubCategory.BrandCategorySub.id,
        },
      };
    } catch (err) {
      throw err;
    }
  }, []);

  const createProduct = useCallback(async (bcsId, data) => {
    try {
      await AdminApi.createProduct(bcsId, data);
    } catch (err) {
      throw err;
    }
  }, []);
  const editProduct = useCallback(async (productId, data) => {
    try {
      await AdminApi.updateProduct(productId, data);
    } catch (err) {
      throw err;
    }
  }, []);
  const deleteProduct = useCallback(async (productId) => {
    //soft delete ? inactive product
    try {
      await AdminApi.deleteProduct(productId);
    } catch (err) {
      throw err;
    }
  }, []);

  const fetchBrand = useCallback(async (page) => {
    try {
      const res = await AdminApi.getBrand(page);

      dispatch({
        type: FETCH_CATEGORY,
        payload: {
          items: res.data.result,
          totalItems: res.data.count,
          totalPages: res.data.totalPages,
          currentPage: res.data.currentPage,
        },
      });
    } catch (err) {
      throw err;
    }
  }, []);
  const fetchCategory = useCallback(async (page) => {
    try {
      const res = await AdminApi.getCategory(page);
      dispatch({
        type: FETCH_CATEGORY,
        payload: {
          items: res.data.result,
          totalItems: res.data.count,
          totalPages: res.data.totalPages,
          currentPage: res.data.currentPage,
        },
      });
    } catch (err) {
      throw err;
    }
  }, []);
  const fetchSubCategory = useCallback(async (page) => {
    try {
      const res = await AdminApi.getSubCategory(page);
      dispatch({
        type: FETCH_CATEGORY,
        payload: {
          items: res.data.result,
          totalItems: res.data.count,
          totalPages: res.data.totalPages,
          currentPage: res.data.currentPage,
        },
      });
    } catch (err) {
      throw err;
    }
  }, []);
  const fetchBCS = useCallback(async (page, filters) => {
    try {
      const res = await AdminApi.getBcs(page, filters);
      dispatch({
        type: FETCH_CATEGORY,
        payload: {
          items: res.data.result,
          totalItems: res.data.count,
          totalPages: res.data.totalPages,
          currentPage: res.data.currentPage,
        },
      });
    } catch (err) {
      throw err;
    }
  }, []);

  const fetchAllCategory = useCallback(async () => {
    try {
      const [brands, category, subCategory] = await Promise.all([
        AdminApi.getAllBrand(),
        AdminApi.getAllCategory(),
        AdminApi.getAllSubCategory(),
      ]);

      dispatch({
        type: FETCH_ALL_CATEGORY,
        payload: {
          brands: brands.data.result,
          category: category.data.result,
          subCategory: subCategory.data.result,
        },
      });
    } catch (err) {
      throw err;
    }
  }, []);

  const fetchAllOrder = useCallback(async (page, pageSize, sorts) => {
    try {
      const res = await AdminApi.getAllOrder(page, pageSize, sorts);

      dispatch({
        type: FETCH_ALL_ORDER,
        payload: {
          items: res.data.result,
          totalItems: res.data.count,
          totalPages: res.data.totalPages,
          currentPage: res.data.currentPage,
        },
      });
    } catch (err) {
      throw err;
    }
  }, []);
  return (
    <AdminContext.Provider
      value={{
        productOverview: AllAdmin.ProductOverview,
        tagOverview: AllAdmin.TagOverview,
        categoryOverview: AllAdmin.CategoryOverview,
        categoryFilters: AllAdmin.CategoryFilter,
        orderOverview: AllAdmin.OrderOverview,
        fetchAllProduct,
        fetchAllBrand,
        fetchBrandCategorySub,
        fetchProductById,
        createProduct,
        editProduct,
        deleteProduct,
        fetchBrand,
        fetchCategory,
        fetchSubCategory,
        fetchBCS,
        fetchAllCategory,
        fetchAllOrder,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
export {AdminContext};
