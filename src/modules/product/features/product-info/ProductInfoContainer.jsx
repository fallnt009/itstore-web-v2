import {useParams} from 'react-router-dom';

import useProduct from '../../../shared/hooks/useProduct';

import ProductInfoContent from './contents/ProductInfoContent';
import {useEffect} from 'react';

export default function ProductInfoContainer() {
  const {categorySlug, subCategorySlug, productSlug} = useParams();
  const {ProductInfo, fetchProductInfo} = useProduct();

  useEffect(() => {
    fetchProductInfo(categorySlug, subCategorySlug, productSlug);
  }, [fetchProductInfo, categorySlug, subCategorySlug, productSlug]);

  return (
    <div className="px-10 py-10">
      <ProductInfoContent ProductInfo={ProductInfo} />
    </div>
  );
}
