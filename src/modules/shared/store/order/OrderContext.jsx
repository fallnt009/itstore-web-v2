import {createContext, useCallback, useReducer} from 'react';

import * as OrderApi from '../../../shared/services/apis/order-api';

import orderReducer, {
  FETCH_ORDER_BY_NUMBER,
  FETCH_ORDER_LISTS,
  SELECT_ORDER_LIST,
  INIT_ORDER,
} from './orderReducer';

import {
  ORDER_PENDING,
  ORDER_PROCESSING,
  ORDER_COMPLETED,
  ORDER_CANCELED,
} from '../../services/config/constants';

const OrderContext = createContext();

export default function OrderContextProvider({children}) {
  const [AllOrder, dispatch] = useReducer(orderReducer, INIT_ORDER);

  //Order
  ////
  const fetchAllMyOrder = useCallback(
    async (page, pageSize, filter) => {
      try {
        const res = await OrderApi.getMyOrder(page, pageSize, filter);

        dispatch({
          type: FETCH_ORDER_LISTS,
          payload: {
            items: res.data.result,
            filter: res.data.result,
            totalPages: res.data.totalPages,
          },
        });
      } catch (err) {
        throw err;
      }
    },
    [dispatch]
  );

  const createOrder = useCallback(async (data) => {
    try {
      const res = await OrderApi.createOrder(data);

      return res.data.result;
    } catch (err) {
      throw err;
    }
  }, []);

  const fetchOrderByNumber = useCallback(
    async (orderNumber) => {
      try {
        const res = await OrderApi.getOrderByNumber(orderNumber);
        const orderDetail = res.data.result;

        const stepMapping = {
          [ORDER_PENDING]: {currentStep: 1, isCancel: false},
          [ORDER_PROCESSING]: {currentStep: 2, isCancel: false},
          [ORDER_COMPLETED]: {currentStep: 3, isCancel: false},
          [ORDER_CANCELED]: {currentStep: 4, isCancel: true},
        };

        const {currentStep, isCancel} = stepMapping[
          orderDetail.orderStatus
        ] || {
          currentStep: 1,
          isCancel: false,
        };

        dispatch({
          type: FETCH_ORDER_BY_NUMBER,
          payload: {
            detail: res.data.result,
            product: res.data.product,
            currentStep: currentStep,
            isCancel: isCancel,
          },
        });
      } catch (err) {
        throw err;
      }
    },
    [dispatch]
  );

  //for order filters
  const selectOrderList = (selectIndex) => {
    //get index and filter ?
    dispatch({type: SELECT_ORDER_LIST, payload: selectIndex});
  };
  //make order history can order in desc or asce

  return (
    <OrderContext.Provider
      value={{
        order: AllOrder.order,
        orderList: AllOrder.orderList,
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
