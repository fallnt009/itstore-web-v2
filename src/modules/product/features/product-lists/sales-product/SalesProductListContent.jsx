import SalesProductListContentItem from './item/SalesProductListContentItem';
import NotFound from '../not-found/NotFound';

export default function SalesProductListContent({
  SaleProductList,
  inWishlist,
  loading,
}) {
  const {items} = SaleProductList;

  return (
    <div>
      {items.length === 0 ? (
        <NotFound />
      ) : (
        <SalesProductListContentItem
          products={items}
          inWishlist={inWishlist}
          loading={loading}
        />
      )}
    </div>
  );
}
