import ProductCard from '../card/ProductCard';

export default function NewProductListContentItem({
  products,
  inWishlist,
  loading,
}) {
  const productWithWishlist = products.map((product) => ({
    ...product,
    inWishlist: inWishlist.some(
      (wishlist) => wishlist.productId === product.id
    ),
  }));
  return (
    <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-2">
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
