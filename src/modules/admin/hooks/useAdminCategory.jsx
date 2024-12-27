import {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import useAdmin from '../../shared/hooks/useAdmin';
import useError from '../../shared/hooks/useError';

export default function useAdminCategory() {
  const {
    categoryOverview,
    categoryFilters,
    fetchBrand,
    fetchCategory,
    fetchSubCategory,
    fetchBCS,
    fetchAllCategory,
  } = useAdmin();
  const {error, errorStatus, setIsError} = useError();

  // const navigate = useNavigate();
  //navbar state
  const [selectedNavId, setIsSelectedNavId] = useState(1);

  //filter State
  //brand ,category and subcategory
  const [filters, setFilters] = useState({
    brandSlug: '',
    categorySlug: '',
    subCategorySlug: '',
  });

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
          4: async () => {
            await Promise.all([fetchAllCategory(), fetchBCS(page, filters)]);
          }, //fetchBCS, getFilters,
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
    fetchAllCategory,
    fetchBCS,
    page,
    setIsError,
    filters,
  ]);

  const handleSelectNavId = useCallback((id) => {
    setIsSelectedNavId(id);
    setPage(1);
  }, []);

  const handleChangePage = useCallback((newPage) => {
    setPage(newPage);
  }, []);
  const handleSetFilter = useCallback((name, value) => {
    setFilters((prevFilters) => ({...prevFilters, [name]: value}));
  }, []);
  const handleClearAllFilter = useCallback(() => {
    setFilters({
      brandSlug: '',
      categorySlug: '',
      subCategorySlug: '',
    });
  }, []);

  return {
    categoryOverview,
    categoryFilters,
    page,
    selectedNavId,
    error,
    errorStatus,
    filters,
    handleSelectNavId,
    handleChangePage,
    handleSetFilter,
    handleClearAllFilter,
  };
}
