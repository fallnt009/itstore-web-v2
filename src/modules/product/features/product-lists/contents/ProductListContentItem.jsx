import ProductCard from '../card/ProductCard';

export default function ProductListContentItem({
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
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 pt-5 px-5">
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
