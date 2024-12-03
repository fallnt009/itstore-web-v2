import {useEffect, useState, useCallback} from 'react';

import useProduct from '../../shared/hooks/useProduct';
import useError from '../../shared/hooks/useError';

export default function useAdminProduct() {
  const {ProductOverview, fetchAllProduct} = useProduct();
  const {error, errorStatus, setIsError} = useError();

  //totalPages
  const {totalPages} = ProductOverview;

  //state
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  //fetch All product
  useEffect(() => {
    const loadProductOverview = async () => {
      setLoading(true);
      try {
        await fetchAllProduct(page, pageSize);
      } catch (err) {
        setIsError(err);
      } finally {
        setLoading(false);
      }
    };
    loadProductOverview();
  }, [setIsError, page, pageSize, fetchAllProduct]);

  const submitChangePage = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  const submitChangePageSize = useCallback((newPageSize) => {
    setPageSize(newPageSize);
  }, []);
  return {
    ProductOverview,
    loading,
    error,
    errorStatus,
    page,
    totalPages,
    submitChangePage,
    submitChangePageSize,
  };
}
