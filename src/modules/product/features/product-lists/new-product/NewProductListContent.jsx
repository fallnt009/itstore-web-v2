import NewProductContentItem from './NewProductListContentItem';

import SidebarFilter from '../../filters/SidebarFilter/SidebarFilter';
import NotFound from '../not-found/NotFound';

export default function NewProductListContent({
  newProducts,
  inWishlist,
  filters,
  loading,
  onSubmit,
  onClear,
}) {
  const {items} = newProducts;

  return (
    <div>
      <div className="my-5">
        <h1 className="text-3xl font-semibold">New Arrivals</h1>
      </div>
      <div className="grid grid-cols-[1fr_5fr]">
        <div>
          <SidebarFilter
          // specItems={specItems}
          // specProduct={specProduct}
          // onSubmit={onSubmit}
          // onClear={onClear}
          />
        </div>
        <div>
          {items.length === 0 ? (
            <NotFound />
          ) : (
            <NewProductContentItem
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
