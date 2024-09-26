import AuthContextProvider from './modules/shared/store/auth/AuthContext';
import CartContextProvider from './modules/shared/store/cart/CartContext';
import LoadingContextProvider from './modules/shared/store/loading/LoadingContext';
import ProductContextProvider from './modules/shared/store/product/ProductContext';

export default function ContextWrapper({children}) {
  return (
    <LoadingContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <ProductContextProvider>{children}</ProductContextProvider>;
        </CartContextProvider>
      </AuthContextProvider>
    </LoadingContextProvider>
  );
}
