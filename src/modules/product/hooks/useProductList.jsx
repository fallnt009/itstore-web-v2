import {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import useAuth from '../../shared/hooks/useAuth';
import useProduct from '../../shared/hooks/useProduct';
import useWishlist from '../../shared/hooks/useWishlist';
import useError from '../../shared/hooks/useError';

import CategoryFilters from '../utils/CategoryFilters';

export default function useProductList() {
  const {categorySlug, subCategorySlug} = useParams();

  const {ProductList, ProductFilters, fetchProductList, fetchProductFilter} =
    useProduct();
  const {inWishlist, fetchInWishlist} = useWishlist();
  const {authenUser} = useAuth();
  const {error, errorStatus, setIsError} = useError();

  //destructuring
  const {totalPages} = ProductList;

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  //Selected
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);

  //loadProductList

  useEffect(() => {
    const loadProductList = async () => {
      setLoading(true);
      try {
        await fetchProductList(
          categorySlug,
          subCategorySlug,
          page,
          pageSize,
          search,
          filters
        );

        //filters function to select on each category
        const title = CategoryFilters(subCategorySlug);
        //Fetch ProductFilter
        await fetchProductFilter(title, subCategorySlug);

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
    loadProductList();
  }, [
    authenUser,
    categorySlug,
    subCategorySlug,
    setIsError,
    fetchInWishlist,
    fetchProductList,
    fetchProductFilter,
    page,
    filters,
    search,
  ]);

  //handleSubmitFilter
  const submitFilter = useCallback((newFilters, newSearch) => {
    setFilters(newFilters);
    setSearch(newSearch);
    setPage(1);
  }, []);

  const clearFilter = useCallback(() => {
    setFilters([]);
  }, []);

  const submitChangePage = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  return {
    ProductList,
    inWishlist,
    ProductFilters,
    loading,
    page,
    totalPages,
    error,
    errorStatus,
    submitFilter,
    clearFilter,
    submitChangePage,
  };
}
