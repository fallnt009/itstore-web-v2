import {createContext, useCallback, useReducer} from 'react';
import wishlistReducer, {
  INIT_WISHLIST,
  FETCH_WISHLIST,
  ADD_WISHLIST,
  DELETE_WISHLIST,
} from './wishlistReducer';

import * as WishlistApi from '../../services/apis/wishlist-api';

const WishlistContext = createContext();

export default function WishlistContextProvider({children}) {
  const [AllWishlist, dispatch] = useReducer(wishlistReducer, INIT_WISHLIST);

  const fetchMyWishlist = useCallback(
    async (page, pageSize) => {
      try {
        const res = await WishlistApi.getMyWishlist(page, pageSize);

        dispatch({
          type: FETCH_WISHLIST,
          payload: {
            items: res.data.result,
            totalItems: res.data.totalItems,
            totalPages: res.data.totalPages,
            currentPage: res.data.currentPage,
          },
        });
      } catch (err) {
        return err.response;
      }
    },
    [dispatch]
  );

  const addWishlist = useCallback(async (productId) => {
    try {
      const res = await WishlistApi.addWishlist(productId);
    } catch (err) {
      return err.response;
    }
  }, []);

  const deleteWishlist = useCallback(
    async (productId) => {
      try {
        await WishlistApi.deleteWishlist(productId);
        dispatch({
          type: DELETE_WISHLIST,
          payload: {
            productId: productId,
          },
        });
      } catch (err) {
        return err.response;
      }
    },
    [dispatch]
  );

  return (
    <WishlistContext.Provider
      value={{
        Wishlist: AllWishlist.Wishlist,
        fetchMyWishlist,
        addWishlist,
        deleteWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export {WishlistContext};
