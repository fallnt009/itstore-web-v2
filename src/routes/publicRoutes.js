import {Navigate} from 'react-router-dom';

import {
  HOME,
  AUTH,
  LOGIN,
  REGISTER,
  NEW_PRODUCT,
  SALES_PRODUCT,
  PRODUCT_LIST,
  PRODUCT_INFO,
  HELP_CENTER,
  TRACKING_ORDER,
  PAYMENT_PROOF,
} from './routes';

//Main
import HomeContainer from '../modules/home';
import AuthContainer from '../modules/auth';

//Container
import NewProductListContanier from '../modules/product/features/product-lists/NewProductListContainer';
import SalesProductListContainer from '../modules/product/features/product-lists/SalesProductListContainer';

import LoginContainer from '../modules/auth/features/login/LoginContainer';
import RegisterContainer from '../modules/auth/features/register/RegisterContainer';
import ProductListContainer from '../modules/product/features/product-lists/ProductListContainer';
import ProductInfoContainer from '../modules/product/features/product-info/ProductInfoContainer';
import HelpCenterContainer from '../modules/help-center';
import TrackingOrderContainer from '../modules/help-center/features/tracking/TrackingOrderContainer';
import PaymentProofContainer from '../modules/help-center/features/payment-proof/PaymentProofContainer';

//middleware
import RedirectIfAuthen from '../modules/auth/features/authen/RedirectIfAuthen';

export const publicRoutes = [
  {
    path: HOME,
    element: <HomeContainer />,
  },
  {
    path: AUTH,
    element: <AuthContainer />,
    children: [
      {
        path: LOGIN,
        element: (
          <RedirectIfAuthen>
            <LoginContainer />,
          </RedirectIfAuthen>
        ),
      },
      {
        path: REGISTER,
        element: <RegisterContainer />,
      },
      {
        path: '',
        element: <Navigate to={LOGIN} />,
      },
    ],
  },

  {
    path: NEW_PRODUCT,
    element: <NewProductListContanier />,
  },
  {
    path: SALES_PRODUCT,
    element: <SalesProductListContainer />,
  },
  {
    path: PRODUCT_LIST,
    element: <ProductListContainer />,
  },
  {
    path: PRODUCT_INFO,
    element: <ProductInfoContainer />,
  },
  {
    path: HELP_CENTER,
    element: <HelpCenterContainer />,
  },
  {
    path: TRACKING_ORDER,
    element: <TrackingOrderContainer />,
  },
  {
    path: PAYMENT_PROOF,
    element: <PaymentProofContainer />,
  },
];
