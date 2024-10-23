import {
  MY_CART,
  CHECKOUT_MAIN,
  CHECKOUT_DETAILS,
  CHECKOUT_SERVICES,
  CHECKOUT_PAYMENT,
  CHECKOUT_TRANSFER,
  ORDER_SUCCESS,
  ORDER_DETAIL,
  ORDER_HISTORY,
  MY_PROFILE,
  MY_WISHLIST,
} from './routes';
//CONTAINER
import CartContainer from '../modules/cart';
import CheckoutContainer from '../modules/checkout';
import ProfileContainer from '../modules/profile';
import WishlistContainer from '../modules/wishlist';
//CHECKOUT
import CheckoutDetails from '../modules/checkout/features/details/CheckoutDetails';
import CheckoutServices from '../modules/checkout/features/services/CheckoutServices';
import CheckoutPayment from '../modules/checkout/features/payment/CheckoutPayment';

//payment portal
import PaymentBankTransfer from '../modules/checkout/features/payment-choices/banktransfer/PaymentBankTransfer';
//middleware
import CheckoutGuard from './utils/CheckoutGuard';
//ORDER
import OrderSuccess from '../modules/order/features/status/OrderSuccess';
import OrderDetail from '../modules/order/features/detail/OrderDetail';
import OrderHistory from '../modules/order/features/history/OrderHistory';
//Wishlist

export const privateRoutes = [
  {
    path: MY_CART,
    element: <CartContainer />,
  },
  {
    path: CHECKOUT_MAIN,
    element: <CheckoutContainer />,
    children: [
      {
        path: CHECKOUT_DETAILS,
        element: <CheckoutDetails />,
      },
      {
        path: CHECKOUT_SERVICES,
        element: <CheckoutServices />,
      },
      {
        path: CHECKOUT_PAYMENT,
        element: <CheckoutPayment />,
      },
      {
        path: CHECKOUT_TRANSFER,
        element: <PaymentBankTransfer />,
      },
    ],
  },
  {
    path: ORDER_SUCCESS,
    element: (
      <CheckoutGuard>
        <OrderSuccess />
      </CheckoutGuard>
    ),
  },
  {
    path: ORDER_DETAIL,
    element: <OrderDetail />,
  },
  {
    path: ORDER_HISTORY,
    element: <OrderHistory />,
  },
  {
    path: MY_PROFILE,
    element: <ProfileContainer />,
  },
  {
    path: MY_WISHLIST,
    element: <WishlistContainer />,
  },
];
