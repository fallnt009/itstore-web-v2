import useUserCart from './hooks/useUserCart';

import CartContent from './features/contents/CartContent';
import CartLoading from './features/loading/CartLoading';

export default function CartContainer() {
  const {
    userCart,
    loading,
    inWishlist,
    cartQtyChange,
    cartDeleteItem,
    cartAddWishlist,
  } = useUserCart();

  return (
    <div className="mx-10 my-10">
      {/* title */}
      <div className="flex justify-start flex-col gap-2 p-2 pb-5 select-none">
        <div className="text-4xl font-semibold ">Your Cart</div>
      </div>
      <div>
        {loading ? (
          <CartLoading cartItems={userCart} />
        ) : (
          <CartContent
            cartItems={userCart}
            inWishlist={inWishlist}
            onQtyChange={cartQtyChange}
            onDelete={cartDeleteItem}
            onAddWishlist={cartAddWishlist}
          />
        )}
      </div>
    </div>
  );
}
