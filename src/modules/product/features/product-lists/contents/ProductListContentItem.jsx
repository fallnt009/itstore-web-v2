import NotFound from '../not-found/NotFound';
import ProductCard from '../card/ProductCard';

export default function ProductListContentItem({products, loading}) {
  if (products.length === 0) {
    return <NotFound />;
  }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 pt-5 px-5">
      {products.map((el) => (
        <ProductCard key={el.id} product={el} loading={loading} />
      ))}
    </div>
  );
}
