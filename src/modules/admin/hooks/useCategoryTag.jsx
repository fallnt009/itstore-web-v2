import {useCallback, useEffect, useState} from 'react';

import useAdmin from '../../shared/hooks/useAdmin';
import useError from '../../shared/hooks/useError';

export default function useCategoryTag() {
  const {tagOverview, fetchAllBrand, fetchBrandCategorySub} = useAdmin();
  const {error, errorStatus, setIsError} = useError();
  //state
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const [bcsError, setBcsError] = useState(null);
  //fetch all brands
  //selectedBrand and fetchBCS
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

  useEffect(() => {
    const loadBrandCategorySub = async () => {
      if (!selectedBrandId) return;
      setBcsError(null);
      try {
        await fetchBrandCategorySub(selectedBrandId);
      } catch (err) {
        //throw error
        setBcsError(err);
      }
    };
    if (selectedBrandId) {
      loadBrandCategorySub();
    }
  }, [fetchBrandCategorySub, selectedBrandId]);

  const setSelectBrandId = useCallback((brandId) => {
    setSelectedBrandId(brandId);
  }, []);

  return {tagOverview, error, errorStatus, bcsError, setSelectBrandId};
}
