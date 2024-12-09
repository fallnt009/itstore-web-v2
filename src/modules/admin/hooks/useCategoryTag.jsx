import {useCallback, useEffect, useMemo, useState} from 'react';

import useAdmin from '../../shared/hooks/useAdmin';
import useError from '../../shared/hooks/useError';

export default function useCategoryTag() {
  const {tagOverview, fetchAllBrand, fetchBrandCategorySub} = useAdmin();
  const {error, errorStatus, setIsError} = useError();
  //state
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const [tagError, setTagError] = useState(null);

  const [page, setPage] = useState(1);
  //
  useEffect(() => {
    const loadAllBrand = async () => {
      try {
        await fetchAllBrand();
      } catch (err) {
        //setError
        setIsError(err);
      }
    };
    loadAllBrand();
  }, [fetchAllBrand, setIsError]);

  const loadBrandCategorySub = useCallback(async () => {
    if (!selectedBrandId) return;
    setTagError(null);
    try {
      await fetchBrandCategorySub(selectedBrandId, page);
    } catch (err) {
      //throw error
      setTagError(err);
    }
  }, [fetchBrandCategorySub, selectedBrandId, page]);

  useEffect(() => {
    if (selectedBrandId) {
      loadBrandCategorySub();
    }
  }, [loadBrandCategorySub, selectedBrandId, page]);

  const setSelectBrandId = useCallback((brandId) => {
    setSelectedBrandId((prevId) => (prevId !== brandId ? brandId : prevId));
  }, []);

  const setChangePage = useCallback((newPage) => {
    setPage((prevPage) => (prevPage !== newPage ? newPage : prevPage));
  }, []);

  return {
    tagOverview,
    error,
    errorStatus,
    tagError,
    page,
    setSelectBrandId,
    setChangePage,
  };
}
