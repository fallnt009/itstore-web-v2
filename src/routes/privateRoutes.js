import {MY_CART} from './routes';

import CartContainer from '../modules/cart';

export const privateRoutes = [
  {
    path: MY_CART,
    element: <CartContainer />,
  },
];
