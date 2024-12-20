import ProductCardError from './contents/ProductCardError';
import ProductCardContent from './contents/ProductCardContent';
import ProductCardLoading from './contents/ProductCardLoading';

export default function ProductCard({product, inWishlist, loading}) {
  if (!product || product.length === 0) {
    return <ProductCardError />;
  }

  return (
    <div className="flex h-full">
      {loading ? (
        <ProductCardLoading />
      ) : (
        <ProductCardContent product={product} inWishlist={inWishlist} />
      )}
    </div>
  );
}
