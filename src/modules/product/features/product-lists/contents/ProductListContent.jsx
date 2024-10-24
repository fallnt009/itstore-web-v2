import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import ProductListHeader from './ProductListHeader';
import ProductListContentItem from './ProductListContentItem';

import SidebarFilter from '../../filters/SidebarFilter/SidebarFilter';
import TabFilter from '../../filters/TabFilter/TabFilter';
import NotFound from '../not-found/NotFound';

export default function ProductListContent({
  products,
  inWishlist,
  filters,
  loading,
  onSubmit,
  setFilters,
}) {
  const {categorySlug, subCategorySlug} = useParams();

  const {items, totalItems} = products;
  const {specItems, specProduct} = filters;

  return (
    <div>
      <ProductListHeader
        categorySlug={categorySlug}
        subCategorySlug={subCategorySlug}
        totalItems={totalItems}
      />
      <div className="grid grid-cols-[1fr_5fr]">
        <div>
          <SidebarFilter
            specItems={specItems}
            specProduct={specProduct}
            onSubmit={onSubmit}
            setFilters={setFilters}
          />
        </div>
        <div>
          <TabFilter />
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
