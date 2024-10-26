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
} from './routes';

//Main
import HomeContainer from '../modules/home';
import AuthContainer from '../modules/auth';

//Container
import NewProductContainer from '../modules/product/features/specials/new-product/NewProductContainer';
import SalesProductContainer from '../modules/product/features/specials/sales-product/SalesProductContainer';
import LoginContainer from '../modules/auth/features/login/LoginContainer';
import RegisterContainer from '../modules/auth/features/register/RegisterContainer';
import ProductListContainer from '../modules/product/features/product-lists/ProductListContainer';
import ProductInfoContainer from '../modules/product/features/product-info/ProductInfoContainer';
import HelpCenterContainer from '../modules/help-center';

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
    element: <NewProductContainer />,
  },
  {
    path: SALES_PRODUCT,
    element: <SalesProductContainer />,
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
];
