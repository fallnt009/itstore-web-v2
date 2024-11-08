import {useContext} from 'react';
import {PaymentContext} from '../store/payment/PaymentContext';

export default function usePayment() {
  return useContext(PaymentContext);
}
