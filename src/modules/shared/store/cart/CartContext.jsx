import {createContext, useCallback, useReducer} from 'react';
import cartReducer, {INIT_CART, FETCH_CART} from './cartReducer';

import * as CartApi from '../../services/apis/cart-api';

const CartContext = createContext();

export default function CartContextProvider({children}) {
  const [AllCart, dispatch] = useReducer(cartReducer, INIT_CART);

  const fetchCart = useCallback(async () => {
    try {
      //api
      const res = await CartApi.getMyCart();

      dispatch({
        type: FETCH_CART,
        payload: {
          userCart: res.data.result.CartItems,
        },
      });
    } catch (err) {
      return err.response;
    }
  }, [dispatch]);

  //Add Cart
  const addCartItem = useCallback(async (valueId) => {
    try {
      //
    } catch (err) {
      return err.response;
    }
  }, []);

  return (
    <CartContext.Provider value={{userCart: AllCart.userCart, fetchCart}}>
      {children}
    </CartContext.Provider>
  );
}

export {CartContext};
