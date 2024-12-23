import {useCallback, useEffect, useState} from 'react';

import useAdmin from '../../shared/hooks/useAdmin';
import useError from '../../shared/hooks/useError';

export default function useAdminCategory() {
  const {categoryOverview, fetchBrand, fetchCategory, fetchSubCategory} =
    useAdmin();
  const {error, errorStatus, setIsError} = useError();
  //navbar state
  const [selectedNavId, setIsSelectedNavId] = useState(1);

  //pargination
  const [page, setPage] = useState(1);

  //fetch category depend on page
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const fetchHandlers = {
          1: () => fetchBrand(page), //fetchBrand,
          2: () => fetchCategory(page), //fetchCategory,
          3: () => fetchSubCategory(page), //fetchSubCategory,
          4: '', //fetchBCS,
        };
        const fetchHandler = fetchHandlers[selectedNavId];

        if (fetchHandler) {
          await fetchHandler();
        } else {
          return;
        }
      } catch (err) {
        //global error here
        setIsError(err);
      }
    };
    fetchCategoryData();
  }, [
    selectedNavId,
    fetchBrand,
    fetchCategory,
    fetchSubCategory,
    page,
    setIsError,
  ]);

  const handleSelectNavId = useCallback((id) => {
    setIsSelectedNavId(id);
    setPage(1);
  }, []);

  const handleChangePage = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  return {
    categoryOverview,
    page,
    selectedNavId,
    error,
    errorStatus,
    handleSelectNavId,
    handleChangePage,
  };
}
