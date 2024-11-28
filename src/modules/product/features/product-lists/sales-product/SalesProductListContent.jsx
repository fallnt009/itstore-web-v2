import ProductCard from '../card/ProductCard';

export default function SalesProductListContent({items, inWishlist, loading}) {
  const productWithWishlist = items.map((product) => ({
    ...product,
    inWishlist: inWishlist.some(
      (wishlist) => wishlist.productId === product.id
    ),
  }));
  return (
    <div className="grid gap-4 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-2">
      {productWithWishlist.map((el) => (
        <ProductCard
          key={el.id}
          product={el}
          inWishlist={el.inWishlist}
          loading={loading}
        />
      ))}
    </div>
  );
}
