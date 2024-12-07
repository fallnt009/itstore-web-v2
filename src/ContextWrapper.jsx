import AuthContextProvider from './modules/shared/store/auth/AuthContext';
import CartContextProvider from './modules/shared/store/cart/CartContext';
import LoadingContextProvider from './modules/shared/store/loading/LoadingContext';
import DrawerContextProvider from './modules/shared/store/drawer/DrawerContext';
import ProductContextProvider from './modules/shared/store/product/ProductContext';
import AddressContextProvider from './modules/shared/store/address/AddressContext';
import CheckoutContextProvider from './modules/shared/store/checkout/CheckoutContext';
import OrderContextProvider from './modules/shared/store/order/OrderContext';
import WishlistContextProvider from './modules/shared/store/wishlist/WishlistContext';

import ErrorContextProvider from './modules/shared/store/error/ErrorContext';
import PaymentContextProvider from './modules/shared/store/payment/PaymentContext';
import AdminContextProvider from './modules/shared/store/admin/AdminContext';

export default function ContextWrapper({children}) {
  return (
    <LoadingContextProvider>
      <ErrorContextProvider>
        <DrawerContextProvider>
          <AuthContextProvider>
            <CartContextProvider>
              <ProductContextProvider>
                <AddressContextProvider>
                  <CheckoutContextProvider>
                    <OrderContextProvider>
                      <PaymentContextProvider>
                        <AdminContextProvider>
                          <WishlistContextProvider>
                            {children}
                          </WishlistContextProvider>
                        </AdminContextProvider>
                      </PaymentContextProvider>
                    </OrderContextProvider>
                  </CheckoutContextProvider>
                </AddressContextProvider>
              </ProductContextProvider>
            </CartContextProvider>
          </AuthContextProvider>
        </DrawerContextProvider>
      </ErrorContextProvider>
    </LoadingContextProvider>
  );
}
