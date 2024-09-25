import {useParams} from 'react-router-dom';
import ProductListHeader from './ProductListHeader';
import ProductListContentItem from './ProductListContentItem';

import SidebarFilter from '../../filters/SidebarFilter/SidebarFilter';
import TabFilter from '../../filters/TabFilter/TabFilter';

export default function ProductListContent({
  products,
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
      {/* <ActiveFilterContent /> */}
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
          <ProductListContentItem products={items} loading={loading} />
        </div>
      </div>
    </div>
  );
}
