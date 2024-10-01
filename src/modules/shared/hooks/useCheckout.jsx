import {useContext} from 'react';
import {CheckoutContext} from '../store/checkout/CheckoutContext';

export default function useCheckout() {
  return useContext(CheckoutContext);
}
