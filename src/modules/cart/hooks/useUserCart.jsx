import {useState, useCallback, useEffect} from 'react';
import {toast} from 'react-toastify';

import useCart from '../../shared/hooks/useCart';
import useWishlist from '../../shared/hooks/useWishlist';

import {UNEXPECTED_ERROR} from '../../shared/services/config/toast';

export default function useUserCart() {
  //context
  const {userCart, updateCartItem, removeCartItem} = useCart();

  const {addWishlist} = useWishlist();

  //skeleton loading
  const [loading, setLoading] = useState(true);

  //if discount

  //loading
  useEffect(() => {
    if (userCart && userCart.length > 0) {
      setLoading(false); // Set loading to false when we have cart items
    } else if (!userCart || userCart.length === 0) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Artificial delay to mimic loading state
      return () => clearTimeout(timer);
    }
  }, [userCart, setLoading]);

  const cartQtyChange = useCallback(
    async (cartItemId, newQty) => {
      try {
        await updateCartItem(cartItemId, newQty);
      } catch (err) {
        toast.error(UNEXPECTED_ERROR);
      }
    },
    [updateCartItem]
  );

  const cartDeleteItem = useCallback(
    async (cartItemId) => {
      try {
        await removeCartItem(cartItemId);
      } catch (err) {
        toast.error(UNEXPECTED_ERROR);
      }
    },
    [removeCartItem]
  );

  const cartAddWishlist = useCallback(
    async (productId) => {
      try {
        await addWishlist(productId);
      } catch (err) {
        toast.error(UNEXPECTED_ERROR);
      }
    },
    [addWishlist]
  );

  return {userCart, loading, cartQtyChange, cartDeleteItem, cartAddWishlist};
}
