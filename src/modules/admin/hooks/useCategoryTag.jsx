import {useCallback, useEffect, useState} from 'react';

import useAdmin from '../../shared/hooks/useAdmin';

export default function useCategoryTag() {
  const {tagOverview, fetchAllBrand, fetchBrandCategorySub} = useAdmin();
  //state
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const [tagError, setTagError] = useState(null);
  const [brandError, setBrandError] = useState(null);

  const [page, setPage] = useState(1);
  //
  useEffect(() => {
    const loadAllBrand = async () => {
      try {
        await fetchAllBrand();
      } catch (err) {
        //setError
        console.log(err);

        setBrandError(err);
      }
    };
    loadAllBrand();
  }, [fetchAllBrand]);

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
    brandError,
    tagError,
    page,
    setSelectBrandId,
    setChangePage,
  };
}
