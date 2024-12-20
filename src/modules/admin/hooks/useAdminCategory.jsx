import {useCallback, useEffect, useState} from 'react';

import useAdmin from '../../shared/hooks/useAdmin';
import useError from '../../shared/hooks/useError';

export default function useAdminCategory() {
  const {} = useAdmin();
  const {error, errorStatus, setIsError} = useError();
  //navbar state
  const [selectedNavId, setIsSelectedNavId] = useState(1);

  //fetch category depend on page
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const fetchHandlers = {
          1: '', //fetchBrand,
          2: '', //fetchCategory,
          3: '', //fetchSubCategory,
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
        console.log(err);
      }
    };
    fetchCategoryData();
  }, [selectedNavId]);

  const handleSelectNavId = useCallback((id) => {
    setIsSelectedNavId(id);
  }, []);

  return {handleSelectNavId};
}
