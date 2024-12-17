import {createContext, useReducer, useCallback} from 'react';
import adminReducer, {
  INIT_ADMIN,
  FETCH_PRODUCT_OVERVIEW,
  FETCH_CATEGORY_TAG,
  FETCH_ALL_BRAND,
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
  return (
    <AdminContext.Provider
      value={{
        productOverview: AllAdmin.ProductOverview,
        tagOverview: AllAdmin.TagOverview,
        fetchAllProduct,
        fetchAllBrand,
        fetchBrandCategorySub,
        fetchProductById,
        createProduct,
        editProduct,
        deleteProduct,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
export {AdminContext};
