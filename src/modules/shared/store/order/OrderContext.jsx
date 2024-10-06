import {createContext, useCallback, useReducer} from 'react';

import * as OrderApi from '../../../shared/services/apis/order-api';

import orderReducer, {
  FETCH_ORDER_BY_NUMBER,
  FETCH_ORDER_LISTS,
  INIT_ORDER,
} from './orderReducer';

const OrderContext = createContext();

export default function OrderContextProvider({children}) {
  const [AllOrder, dispatch] = useReducer(orderReducer, INIT_ORDER);

  //Order
  ////
  const fetchAllMyOrder = useCallback(async () => {
    try {
      const res = await OrderApi.getMyOrder();
      //
      dispatch({
        type: FETCH_ORDER_LISTS,
        payload: {items: res.data.result},
      });
    } catch (err) {
      return err.response;
    }
  }, [dispatch]);

  const createOrder = useCallback(async (data) => {
    try {
      const res = await OrderApi.createOrder(data);

      return res.data.result;
    } catch (err) {
      return err.response;
    }
  }, []);

  const fetchOrderByNumber = useCallback(
    async (orderNumber) => {
      try {
        console.log(orderNumber);

        const res = await OrderApi.getOrderByNumber(orderNumber);

        dispatch({
          type: FETCH_ORDER_BY_NUMBER,
          payload: {
            detail: res.data.result,
            product: res.data.product,
          },
        });
      } catch (err) {
        return err.response;
      }
    },
    [dispatch]
  );

  //for order filters
  const selectOrderList = (selectIndex) => {
    // dispatch({type: SELECT_ORDER_LIST, payload: selectIndex});
  };
  //make order history can order in desc or asce

  return (
    <OrderContext.Provider
      value={{
        order: AllOrder.order,
        orderFilter: AllOrder.orderFilter,
        orderItems: AllOrder.orderItems,
        selectedOrder: AllOrder.selectedOrder,
        fetchAllMyOrder,
        fetchOrderByNumber,
        createOrder,
        selectOrderList,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export {OrderContext};
