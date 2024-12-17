import {useEffect, useState, useCallback} from 'react';
import {toast} from 'react-toastify';

import useAdmin from '../../shared/hooks/useAdmin';
import useError from '../../shared/hooks/useError';

import {
  UNEXPECTED_ERROR,
  DELETE_SUCCESS,
} from '../../shared/services/config/toast';
export default function useAdminProduct() {
  const {productOverview, fetchAllProduct, deleteProduct} = useAdmin();
  const {error, errorStatus, setIsError} = useError();

  //totalPages
  const {totalPages} = productOverview;

  //pargination state
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  //filter state
  const [sorts, setSorts] = useState({sortBy: 'createdAt', sortValue: 'ASC'});
  //highest price {sortBy:'price', sortValue: 'ASC' }
  const [filters, setFilters] = useState({isActive: '', inStock: ''});
  const [search, setSearch] = useState('');

  //fetch All product
  useEffect(() => {
    const loadProductOverview = async () => {
      setLoading(true);
      try {
        await fetchAllProduct(page, pageSize, sorts, filters, search);
      } catch (err) {
        setIsError(err);
      } finally {
        setLoading(false);
      }
    };
    loadProductOverview();
  }, [setIsError, page, pageSize, sorts, filters, search, fetchAllProduct]);

  const submitChangePage = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  const submitChangePageSize = useCallback((newPageSize) => {
    setPageSize(newPageSize);
  }, []);

  const setSortOrder = useCallback((newSort) => {
    const sortsMapping = {
      asc: {sortBy: 'createdAt', sortValue: 'ASC'},
      desc: {sortBy: 'createdAt', sortValue: 'DESC'},
      highestPrice: {sortBy: 'price', sortValue: 'DESC'},
      lowestPrice: {sortBy: 'price', sortValue: 'ASC'},
    };
    //if sort have value return setsort
    if (sortsMapping[newSort]) {
      setSorts(sortsMapping[newSort]);
    }
  }, []);

  const setChangeFilters = useCallback((newFilter) => {
    const filtersMapping = {
      active: {isActive: true},
      inactive: {isActive: false},
      instock: {inStock: true},
      outOfStock: {inStock: false},
    };

    setFilters((prevFilters) => ({
      ...prevFilters,
      ...filtersMapping[newFilter],
    }));
  }, []);

  const setSubmitSearch = useCallback((string) => {
    //debounce search
    const handler = setTimeout(() => {
      setSearch(string);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, []);
  const setClearAll = useCallback(() => {
    setFilters({isActive: '', inStock: ''});
    setSorts({sortBy: 'createdAt', sortValue: 'ASC'});
    setSearch('');
  }, []);

  //Click to Set Product Status InActive
  //Delete ? Soft Delete ? Admin Only ?

  const submitDeleteProduct = useCallback(async (productId) => {
    try {
      //call api proceed to delete
      await deleteProduct(productId);

      toast.success(DELETE_SUCCESS);
    } catch (err) {
      toast.error(UNEXPECTED_ERROR);
    }
  }, []);

  return {
    productOverview,
    loading,
    error,
    errorStatus,
    page,
    totalPages,
    sorts,
    filters,
    submitChangePage,
    submitChangePageSize,
    setSortOrder,
    setChangeFilters,
    setSubmitSearch,
    setClearAll,
    submitDeleteProduct,
  };
}
