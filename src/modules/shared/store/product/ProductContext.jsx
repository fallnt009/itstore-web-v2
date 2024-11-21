import {createContext, useCallback, useReducer} from 'react';
import productReducer, {
  INIT_PRODUCT,
  FETCH_PRODUCT_HOME,
  FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_FILTER,
  FETCH_PRODUCT_INFO,
  FETCH_NEW_PRODUCT_LIST,
  FETCH_SALE_PRODUCT_LIST,
} from './productReducer';

import * as ProductApi from '../../services/apis/product-api';

const ProductContext = createContext();

export default function ProductContextProvider({children}) {
  const [AllProduct, dispatch] = useReducer(productReducer, INIT_PRODUCT);

  const fetchHome = useCallback(async () => {
    try {
      //fetch new & sales
      const [newProduct, salesProduct] = await Promise.all([
        ProductApi.getNewProduct(),
        ProductApi.getSalesProduct(),
      ]);

      dispatch({
        type: FETCH_PRODUCT_HOME,
        payload: {
          newProducts: newProduct.data.result,
          salesProducts: salesProduct.data.result,
        },
      });
    } catch (err) {
      throw err;
    }
  }, [dispatch]);

  const fetchProductList = useCallback(
    async (categoryName, subCategoryName, page, limit, search, filters) => {
      try {
        const res = await ProductApi.getProductList(
          categoryName,
          subCategoryName,
          page,
          limit,
          search,
          filters
        );
        dispatch({
          type: FETCH_PRODUCT_LIST,
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
    [dispatch]
  );

  const fetchProductFilter = useCallback(
    async (title, subCategorySlug) => {
      try {
        const [specItem, specProduct] = await Promise.all([
          ProductApi.getSpecItems(subCategorySlug, title),
          ProductApi.getSpecProduct(subCategorySlug),
        ]);

        dispatch({
          type: FETCH_PRODUCT_FILTER,
          payload: {
            specItems: specItem.data.result,
            specProduct: specProduct.data.result,
          },
        });
      } catch (err) {
        throw err;
      }
    },
    [dispatch]
  );

  const fetchProductInfo = useCallback(
    async (categorySlug, subCategorySlug, productSlug) => {
      try {
        //product info api
        const info = await ProductApi.getProductInfo(
          categorySlug,
          subCategorySlug,
          productSlug
        );

        const productId = info.data.result.id;
        //specItems,specDetail api
        const [specItem, specText] = await Promise.all([
          ProductApi.getSpecItems(subCategorySlug),
          ProductApi.getSpecText(productId),
        ]);

        dispatch({
          type: FETCH_PRODUCT_INFO,
          payload: {
            product: info.data.result,
            images: info.data.result.ProductImages,
            specTitle: specItem.data.result,
            specText: specText.data.result,
          },
        });
      } catch (err) {
        throw err;
      }
    },
    [dispatch]
  );

  const fetchNewProductList = useCallback(async (page, pageSize) => {
    try {
      const res = await ProductApi.getNewProduct(page, pageSize);

      dispatch({
        type: FETCH_NEW_PRODUCT_LIST,
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
  }, []);
  const fetchSaleProductList = useCallback(async (page, pageSize) => {
    try {
      const res = await ProductApi.getSalesProduct(page, pageSize);

      dispatch({
        type: FETCH_SALE_PRODUCT_LIST,
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
  }, []);
  return (
    <ProductContext.Provider
      value={{
        Home: AllProduct.Home,
        ProductList: AllProduct.ProductList,
        ProductFilters: AllProduct.ProductFilters,
        ProductInfo: AllProduct.ProductInfo,
        NewProductList: AllProduct.NewProductList,
        SaleProductList: AllProduct.SaleProductList,
        fetchHome,
        fetchProductList,
        fetchProductFilter,
        fetchProductInfo,
        fetchNewProductList,
        fetchSaleProductList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export {ProductContext};
