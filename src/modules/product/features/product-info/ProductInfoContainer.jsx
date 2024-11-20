import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import useProduct from '../../../shared/hooks/useProduct';
import useError from '../../../shared/hooks/useError';

import ProductInfoContent from './contents/ProductInfoContent';
import ErrorPage from '../../../shared/features/error/ErrorPage';

export default function ProductInfoContainer() {
  const {categorySlug, subCategorySlug, productSlug} = useParams();
  const {ProductInfo, fetchProductInfo} = useProduct();
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
  }, [fetchProductInfo, categorySlug, subCategorySlug, productSlug]);

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <div className="mx-10 my-10">
      <ProductInfoContent ProductInfo={ProductInfo} />
    </div>
  );
}
