import {createContext, useReducer, useCallback, useState} from 'react';
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

  const createProduct = useCallback(async (bcsId, data) => {
    try {
      console.log(bcsId, data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const editProduct = useCallback(async () => {}, []);
  const deleteProduct = useCallback(async () => {
    //soft delete ? inactive product
  }, []);
  return (
    <AdminContext.Provider
      value={{
        productOverview: AllAdmin.ProductOverview,
        tagOverview: AllAdmin.TagOverview,
        fetchAllProduct,
        fetchAllBrand,
        fetchBrandCategorySub,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
export {AdminContext};
