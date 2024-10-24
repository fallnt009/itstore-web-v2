import {createContext, useCallback, useReducer} from 'react';
import wishlistReducer, {
  INIT_WISHLIST,
  FETCH_WISHLIST,
  ADD_WISHLIST,
  DELETE_WISHLIST,
  FETCH_INWISHLIST,
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

  const fetchInWishlist = useCallback(async () => {
    try {
      const res = await WishlistApi.getInWishlist();

      dispatch({
        type: FETCH_INWISHLIST,
        payload: {inWishlist: res.data.result},
      });
    } catch (err) {
      return err.response;
    }
  }, [dispatch]);

  const addWishlist = useCallback(
    async (productId) => {
      try {
        const res = await WishlistApi.addWishlist(productId);
        //dispatch
        dispatch({type: ADD_WISHLIST, payload: {newWishlist: res.data.result}});
      } catch (err) {
        return err.response;
      }
    },
    [dispatch]
  );

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
        inWishlist: AllWishlist.inWishlist,
        fetchMyWishlist,
        fetchInWishlist,
        addWishlist,
        deleteWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export {WishlistContext};
