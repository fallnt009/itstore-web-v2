import {useState, useEffect, useCallback} from 'react';

import useProduct from '../../shared/hooks/useProduct';
import useWishlist from '../../shared/hooks/useWishlist';
import useAuth from '../../shared/hooks/useAuth';
import useError from '../../shared/hooks/useError';

export default function useNewProductList() {
  const {NewProductList, fetchNewProductList} = useProduct();
  const {inWishlist, fetchInWishlist} = useWishlist();
  const {authenUser} = useAuth();
  const {error, errorStatus, setIsError} = useError();

  //
  const {totalPages} = NewProductList;

  //state
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadNewProductList = async () => {
      setLoading(true);
      try {
        await fetchNewProductList(page, 9);

        if (authenUser) {
          //laad wishlist if authen
          await fetchInWishlist();
        }
      } catch (err) {
        setIsError(err);
      } finally {
        setLoading(false);
      }
    };

    loadNewProductList();
  }, [authenUser, page, fetchNewProductList, fetchInWishlist, setIsError]);

  const submitChangePage = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  return {
    NewProductList,
    inWishlist,
    loading,
    error,
    errorStatus,
    page,
    totalPages,
    submitChangePage,
  };
}
