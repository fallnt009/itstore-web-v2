import {
  MY_CART,
  CHECKOUT_MAIN,
  CHECKOUT_DETAILS,
  CHECKOUT_SERVICES,
  CHECKOUT_PAYMENT,
  ORDER_SUCCESS,
  ORDER_DETAIL,
  ORDER_HISTORY,
  MY_PROFILE,
  MY_WISHLIST,
  PAYMENT_SELECT,
  BANK_TRANSFER_PAYMENT,
  QR_PAYMENT,
  PAYMENT_AWATING,
  ADMIN_DASHBOARD,
  ADMIN_PRODUCT,
  ADMIN_ORDER,
  ADMIN_MAIN,
  ADMIN_PRODUCT_CREATE,
  ADMIN_PRODUCT_EDIT,
  ADMIN_CATEGORY,
  ADMIN_CATEGORY_CREATE,
} from './routes';

//CONTAINER
import CartContainer from '../modules/cart';
import CheckoutContainer from '../modules/checkout';
import ProfileContainer from '../modules/profile';
import WishlistContainer from '../modules/wishlist';
import AdminContainer from '../modules/admin';
//CHECKOUT
import CheckoutDetails from '../modules/checkout/features/details/CheckoutDetails';
import CheckoutServices from '../modules/checkout/features/services/CheckoutServices';
import CheckoutPayment from '../modules/checkout/features/payment/CheckoutPayment';

//payment portal
import PaymentContainer from '../modules/payment/index';

import BankTransferPayment from '../modules/payment/features/bank-transfer/BankTransferPayment';
import QrPayment from '../modules/payment/features/qr-payment/QrPayment';

import PaymentAwaiting from '../modules/payment/features/status/PaymentAwaiting';
//middleware
// import CheckoutGuard from './utils/CheckoutGuard';
//ORDER
import OrderSuccess from '../modules/order/features/status/OrderSuccess';
import OrderDetail from '../modules/order/features/detail/OrderDetail';
import OrderHistory from '../modules/order/features/history/OrderHistory';
//Wishlist

//admin
import AdminDashboard from '../modules/admin/features/dashboard/AdminDashboard';
import AdminOrder from '../modules/admin/features/order/AdminOrder';
import AdminProduct from '../modules/admin/features/product/AdminProduct';
import AdminProductCreate from '../modules/admin/features/product/action/AdminProductCreate';
import AdminProductEdit from '../modules/admin/features/product/action/AdminProductEdit';

import AdminCategory from '../modules/admin/features/category/AdminCategory';
import AdminCategoryCreate from '../modules/admin/features/category/actions/AdminCategoryCreate';
import AdminOrderDetails from '../modules/admin/features/order/order-details/AdminOrderDetails';
import CheckoutMain from '../modules/checkout/main';

export const privateRoutes = [
  {
    path: MY_CART,
    element: <CartContainer />,
  },
  {
    path: '/checkout/test',
    element: <CheckoutMain />,
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
    ],
  },
  {
    path: ORDER_SUCCESS,
    element: <OrderSuccess />,
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
  {
    path: PAYMENT_SELECT,
    element: <PaymentContainer />,
  },
  //payment main
  {
    path: BANK_TRANSFER_PAYMENT,
    element: <BankTransferPayment />,
  },
  {
    path: QR_PAYMENT,
    element: <QrPayment />,
  },
  //Payment status
  {
    path: PAYMENT_AWATING,
    element: <PaymentAwaiting />,
  },
  {
    path: ADMIN_MAIN,
    element: <AdminContainer />,

    children: [
      {
        path: ADMIN_DASHBOARD,
        element: <AdminDashboard />,
      },
      {
        path: ADMIN_PRODUCT,
        element: <AdminProduct />,
      },
      {
        path: ADMIN_PRODUCT_CREATE,
        element: <AdminProductCreate />,
      },
      {
        path: ADMIN_PRODUCT_EDIT,
        element: <AdminProductEdit />,
      },
      {
        path: ADMIN_ORDER,
        element: <AdminOrder />,
      },
      {
        path: ADMIN_CATEGORY,
        element: <AdminCategory />,
      },
      {
        path: ADMIN_CATEGORY_CREATE,
        element: <AdminCategoryCreate />,
      },
      {
        path: 'order/test',
        element: <AdminOrderDetails />,
      },
    ],
  },
];
