import {useContext} from 'react';
import {CartContext} from '../store/cart/CartContext';

export default function useCart() {
  return useContext(CartContext);
}
