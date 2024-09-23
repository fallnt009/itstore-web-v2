import ProductCardError from './contents/ProductCardError';
import ProductCardContent from './contents/ProductCardContent';
import ProductCardLoading from './contents/ProductCardLoading';

export default function ProductCard({product, loading}) {
  if (!product || product.length === 0) {
    return <ProductCardError />;
  }
  return (
    <div className="container p-2">
      {loading ? (
        <ProductCardLoading />
      ) : (
        <ProductCardContent product={product} />
      )}
    </div>
  );
}
