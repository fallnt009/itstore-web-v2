import ProductContextProvider from './modules/shared/store/product/ProductContext';

export default function ContextWrapper({children}) {
  return <ProductContextProvider>{children}</ProductContextProvider>;
}
