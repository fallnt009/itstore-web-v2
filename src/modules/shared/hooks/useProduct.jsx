import {useContext} from 'react';
import {ProductContext} from '../store/product/ProductContext';

export default function useProduct() {
  return useContext(ProductContext);
}
