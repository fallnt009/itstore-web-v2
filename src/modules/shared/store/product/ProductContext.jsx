import {createContext, useCallback, useReducer} from 'react';
import productReducer, {
  INIT_PRODUCT,
  FETCH_PRODUCT_HOME,
} from './productReducer';

import * as ProductApi from '../../services/apis/product-api';

const ProductContext = createContext();

export default function ProductContextProvider({children}) {
  const [AllProduct, dispatch] = useReducer(productReducer, INIT_PRODUCT);

  const fetchHome = useCallback(async () => {
    try {
      //fetch new & sales
      const newProduct = await ProductApi.getNewProduct();
      const salesProduct = await ProductApi.getSalesProduct();

      dispatch({
        type: FETCH_PRODUCT_HOME,
        payload: {
          newProducts: newProduct.data.result,
          salesProducts: salesProduct.data.result,
        },
      });
    } catch (err) {
      return err.response;
    }
  }, [dispatch]);
  return (
    <ProductContext.Provider value={{Home: AllProduct.Home, fetchHome}}>
      {children}
    </ProductContext.Provider>
  );
}

export {ProductContext};
