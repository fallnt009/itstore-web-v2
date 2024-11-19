import {useEffect} from 'react';

import useError from '../../shared/hooks/useError';
import useProduct from '../../shared/hooks/useProduct';
import useLoading from '../../shared/hooks/useLoading';

export default function useHomePage() {
  const {Home, fetchHome} = useProduct();
  const {error, errorStatus, setIsError} = useError();

  const {loading, startLoading, stopLoading} = useLoading();

  useEffect(() => {
    const fetchHomePage = async () => {
      // startLoading();
      try {
        await fetchHome();
      } catch (err) {
        setIsError(err);
      } finally {
        // stopLoading();
      }
    };
    fetchHomePage();
  }, [fetchHome, setIsError, startLoading, stopLoading]);

  return {Home, loading, error, errorStatus};
}
