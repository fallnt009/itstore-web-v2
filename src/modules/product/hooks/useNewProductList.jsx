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
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const loadNewProductList = async () => {
      setLoading(true);
      try {
        await fetchNewProductList(page, pageSize);

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
  }, [
    authenUser,
    page,
    pageSize,
    fetchNewProductList,
    fetchInWishlist,
    setIsError,
  ]);

  const submitChangePage = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  const submitChangePageSize = useCallback((newPageSize) => {
    setPageSize(newPageSize);
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
    submitChangePageSize,
  };
}
