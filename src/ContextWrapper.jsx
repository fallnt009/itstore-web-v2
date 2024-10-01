import AuthContextProvider from './modules/shared/store/auth/AuthContext';
import CartContextProvider from './modules/shared/store/cart/CartContext';
import LoadingContextProvider from './modules/shared/store/loading/LoadingContext';
import DrawerContextProvider from './modules/shared/store/drawer/DrawerContext';
import ProductContextProvider from './modules/shared/store/product/ProductContext';
import AddressContextProvider from './modules/shared/store/address/AddressContext';
import CheckoutContextProvider from './modules/shared/store/checkout/CheckoutContext';

export default function ContextWrapper({children}) {
  return (
    <LoadingContextProvider>
      <DrawerContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <ProductContextProvider>
              <AddressContextProvider>
                <CheckoutContextProvider>{children}</CheckoutContextProvider>
              </AddressContextProvider>
            </ProductContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </DrawerContextProvider>
    </LoadingContextProvider>
  );
}
