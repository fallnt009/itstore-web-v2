import {
  MY_CART,
  CHECKOUT_MAIN,
  CHECKOUT_DETAILS,
  CHECKOUT_SERVICES,
  CHECKOUT_PAYMENT,
} from './routes';

import CartContainer from '../modules/cart';
import CheckoutContainer from '../modules/checkout';
import CheckoutDetails from '../modules/checkout/features/details/CheckoutDetails';

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
      },
      {
        path: CHECKOUT_PAYMENT,
      },
    ],
  },
];
