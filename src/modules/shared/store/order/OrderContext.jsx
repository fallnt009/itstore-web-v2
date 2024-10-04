import {createContext, useCallback, useReducer} from 'react';

import * as OrderApi from '../../../shared/services/apis/';

import orderReducer, {
  FETCH_ORDER,
  INIT_ORDER,
  SELECT_ORDER,
  SELECT_ORDER_LIST,
} from './orderReducer';

const OrderContext = createContext();

export default function OrderContextProvider({children}) {
  const [AllOrder, dispatch] = useReducer(orderReducer, INIT_ORDER);

  //Order
  ////
  const fetchMyOrder = useCallback(async () => {
    try {
      const res = await OrderApi.getMyOrder();
      //
      dispatch({
        type: FETCH_ORDER,
        payload: {order: res.data.result},
      });
    } catch (err) {
      return err.response;
    }
  }, [dispatch]);

  return (
    <OrderContext.Provider
      value={{
        order: AllOrder.order,
        orderFilter: AllOrder.orderFilter,
        orderItems: AllOrder.orderItems,
        selectedOrder: AllOrder.selectedOrder,
        fetchMyOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export {OrderContext};
