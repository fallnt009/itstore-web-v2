import {useEffect, useState, useCallback} from 'react';

import useError from '../../shared/hooks/useError';
import useProduct from '../../shared/hooks/useProduct';
import useWishlist from '../../shared/hooks/useWishlist';
import useAuth from '../../shared/hooks/useAuth';

export default function useSalesProductList() {
  const {SaleProductList, fetchSaleProductList} = useProduct();
  const {inWishlist, fetchInWishlist} = useWishlist();
  const {error, errorStatus, setIsError} = useError();
  const {authenUser} = useAuth();

  //des
  const {totalPages} = SaleProductList;

  //states
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);

  //fetch
  useEffect(() => {
    const loadSalesProductList = async () => {
      setLoading(true);
      try {
        await fetchSaleProductList(page, pageSize);

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
    loadSalesProductList();
  }, [
    authenUser,
    page,
    pageSize,
    fetchSaleProductList,
    fetchInWishlist,
    setIsError,
  ]);

  //handleChangePage
  const submitChangePage = useCallback((newPage) => {
    setPage(newPage);
  }, []);
  const submitChangePageSize = useCallback((newPageSize) => {
    setPageSize(newPageSize);
  }, []);

  return {
    SaleProductList,
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
