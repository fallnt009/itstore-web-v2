import useProductInfo from '../../hooks/useProductInfo';

import ProductInfoContent from './contents/ProductInfoContent';
import ErrorPage from '../../../shared/features/error/ErrorPage';

export default function ProductInfoContainer() {
  const {ProductInfo, error, errorStatus} = useProductInfo();

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <div>
      <ProductInfoContent ProductInfo={ProductInfo} />
    </div>
  );
}
