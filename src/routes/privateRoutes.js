import {
  MY_CART,
  CHECKOUT_MAIN,
  CHECKOUT_DETAILS,
  CHECKOUT_SERVICES,
  CHECKOUT_PAYMENT,
  CHECKOUT_TRANSFER,
  ORDER_SUCCESS,
  ORDER_DETAIL,
} from './routes';

import CartContainer from '../modules/cart';
import CheckoutContainer from '../modules/checkout';
import CheckoutDetails from '../modules/checkout/features/details/CheckoutDetails';
import CheckoutServices from '../modules/checkout/features/services/CheckoutServices';
import CheckoutPayment from '../modules/checkout/features/payment/CheckoutPayment';

//payment portal
import PaymentBankTransfer from '../modules/checkout/features/payment-choices/banktransfer/PaymentBankTransfer';
import OrderSuccess from '../modules/order/features/status/OrderSuccess';
//middleware
import CheckoutGuard from './utils/CheckoutGuard';
import OrderDetail from '../modules/order/features/detail/OrderDetail';

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
];
