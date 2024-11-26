import {useParams} from 'react-router-dom';

import ProductListBreadCrumb from './breadcrumb/ProductListBreadCrumb';
import ProductListHeader from './ProductListHeader';
import ProductListContentItem from './ProductListContentItem';

import TabFilter from '../../filters/TabFilter/TabFilter';
import NotFound from '../not-found/NotFound';

export default function ProductListContent({
  products,
  inWishlist,
  filters,
  loading,
}) {
  const {categorySlug, subCategorySlug} = useParams();

  const {items, totalItems} = products;
  const {specItems, specProduct} = filters;
  //chnage side bar to tabbar filter
  return (
    <div className="px-5 py-5">
      <div>
        <ProductListBreadCrumb subCategorySlug={subCategorySlug} />
        <ProductListHeader
          subCategorySlug={subCategorySlug}
          totalItems={totalItems}
        />
      </div>
      <div className="grid ">
        <div>
          <TabFilter specItems={specItems} specProduct={specProduct} />
          {items.length === 0 ? (
            <NotFound />
          ) : (
            <ProductListContentItem
              products={items}
              inWishlist={inWishlist}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
}
