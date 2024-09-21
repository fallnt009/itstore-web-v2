import AuthContextProvider from './modules/shared/store/auth/AuthContext';
import LoadingContextProvider from './modules/shared/store/loading/LoadingContext';
import ProductContextProvider from './modules/shared/store/product/ProductContext';

export default function ContextWrapper({children}) {
  return (
    <LoadingContextProvider>
      <AuthContextProvider>
        <ProductContextProvider>{children}</ProductContextProvider>;
      </AuthContextProvider>
    </LoadingContextProvider>
  );
}
