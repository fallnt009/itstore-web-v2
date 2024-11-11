import {useState, useEffect} from 'react';
import {toast} from 'react-toastify';

import useCart from '../shared/hooks/useCart';
// import useLoading from '../shared/hooks/useLoading';
import {UNEXPECTED_ERROR} from '../shared/services/config/toast';

import CartContent from './features/contents/CartContent';
import CartLoading from './features/loading/CartLoading';

export default function CartContainer() {
  //useCart
  const {userCart, updateCartItem, removeCartItem} = useCart();
  // const {startLoading, stopLoading} = useLoading();
  //loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userCart && userCart.length > 0) {
      setLoading(false); // Set loading to false when we have cart items
    } else if (!userCart || userCart.length === 0) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Artificial delay to mimic loading state
      return () => clearTimeout(timer);
    }
  }, [userCart]);

  // on Qty Change
  const handleChangeQty = async (cartItemId, newQty) => {
    try {
      await updateCartItem(cartItemId, newQty);
    } catch (err) {
      toast.error(UNEXPECTED_ERROR);
    }
  };
  const handleDeleteItem = async (cartItemId) => {
    try {
      await removeCartItem(cartItemId);
    } catch (err) {
      toast.error(UNEXPECTED_ERROR);
    }
  };

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
            onQtyChange={handleChangeQty}
            onDelete={handleDeleteItem}
          />
        )}
      </div>
    </div>
  );
}
