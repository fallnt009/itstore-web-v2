import useUserCart from './hooks/useUserCart';

import CartContent from './features/contents/CartContent';
import CartLoading from './features/loading/CartLoading';

export default function CartContainer() {
  const {userCart, loading, cartQtyChange, cartDeleteItem, cartAddWishlist} =
    useUserCart();

  return (
    <div className="px-10 py-10">
      {/* title */}
      <div className="flex justify-start flex-col gap-2 p-2 pb-5">
        <div className="text-4xl font-semibold ">Your Cart</div>
      </div>
      <div className="border p-4">
        {loading ? (
          <CartLoading cartItems={userCart} />
        ) : (
          <CartContent
            cartItems={userCart}
            onQtyChange={cartQtyChange}
            onDelete={cartDeleteItem}
            onAddWishlist={cartAddWishlist}
          />
        )}
      </div>
    </div>
  );
}
