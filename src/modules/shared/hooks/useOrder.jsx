import {useContext} from 'react';
import {OrderContext} from '../store/order/OrderContext';

export default function useOrder() {
  return useContext(OrderContext);
}
