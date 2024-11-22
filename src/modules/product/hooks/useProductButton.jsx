import {useState, useEffect, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

import useWishlist from '../../shared/hooks/useWishlist';
import useCart from '../../shared/hooks/useCart';
import useAuth from '../../shared/hooks/useAuth';

//config
import {
  BUTTON_DEFAULT,
  BUTTON_ADDED,
  //   BUTTON_ERROR,
} from '../../shared/services/config/constants';
import {LOGIN} from '../../shared/services/config/routing';
import {
  UNEXPECTED_ERROR,
  ADD_TOCART,
  ADD_WISHLIST,
  REMOVE_WISHLIST,
} from '../../shared/services/config/toast';

export default function useProductButton() {
  //inWishlist
  const {inWishlist, fetchInWishlist, addWishlist, deleteWishlist} =
    useWishlist();
  const {addCartItem} = useCart();

  const {authenUser} = useAuth();

  const navigate = useNavigate();

  //button state
  const [buttonStatus, setButtonStatus] = useState(BUTTON_DEFAULT);

  //fetch InWishlist
  useEffect(() => {
    const loadInWishlist = async () => {
      if (authenUser) {
        await fetchInWishlist();
      }
    };
    loadInWishlist();
  }, [fetchInWishlist, authenUser]);

  const onAddCart = useCallback(
    async (productId, title) => {
      try {
        await addCartItem(productId);
        toast.success(ADD_TOCART(title));
        setButtonStatus(BUTTON_ADDED);
      } catch (err) {
        toast.error(UNEXPECTED_ERROR);
      } finally {
        setTimeout(() => {
          setButtonStatus(BUTTON_DEFAULT);
        }, 1000);
      }
    },
    [addCartItem]
  );

  const onAddWishlist = useCallback(
    async (productId, title, isInWishlist) => {
      try {
        if (isInWishlist) {
          //delete wishlist
          await deleteWishlist(productId);
          //toast
          toast.success(REMOVE_WISHLIST(title));
        } else {
          //add wishlist
          await addWishlist(productId);
          //toast
          toast.success(ADD_WISHLIST(title));
        }
      } catch (err) {
        //err

        //if not login go to login page
        if (err.status === 401) {
          navigate(LOGIN);
        } else {
          toast.error(UNEXPECTED_ERROR);
        }
      }
    },
    [addWishlist, deleteWishlist, navigate]
  );
  return {inWishlist, buttonStatus, onAddWishlist, onAddCart};
}
