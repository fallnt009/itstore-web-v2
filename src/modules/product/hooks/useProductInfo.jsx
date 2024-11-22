import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import useProduct from '../../shared/hooks/useProduct';

import useAuth from '../../shared/hooks/useAuth';
import useError from '../../shared/hooks/useError';

export default function useProductInfo() {
  const {categorySlug, subCategorySlug, productSlug} = useParams();
  const {ProductInfo, fetchProductInfo} = useProduct();

  const {authenUser} = useAuth();
  const {error, errorStatus, setIsError} = useError();

  useEffect(() => {
    const loadProductInfo = async () => {
      try {
        await fetchProductInfo(categorySlug, subCategorySlug, productSlug);
      } catch (err) {
        setIsError(err);
      }
    };
    loadProductInfo();
  }, [
    fetchProductInfo,
    categorySlug,
    subCategorySlug,
    productSlug,
    setIsError,
    authenUser,
  ]);

  return {ProductInfo, error, errorStatus};
}
