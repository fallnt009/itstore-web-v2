import {createContext, useCallback, useReducer, useState} from 'react';

import checkoutReducer, {
  CREATE_CHECKOUT,
  FETCH_CHECKOUT,
  GET_TOTAL_AMOUNT,
  INIT_CHECKOUT,
  SELECT_CHECKOUT,
} from './checkoutReducer';

import * as CheckoutApi from '../../services/apis/checkout-api';

const CheckoutContext = createContext();

export default function CheckoutContextProvider({children}) {
  const [AllCheckout, dispatch] = useReducer(checkoutReducer, INIT_CHECKOUT);
  const [isProcessCompleted, setIsProcessCompleted] = useState(false);
  //FETCH
  const fetchCheckout = useCallback(async () => {
    try {
      const [checkoutItem, service, payment] = await Promise.all([
        await CheckoutApi.getMyCheckout(),
        await CheckoutApi.getService(),
        await CheckoutApi.getPayment(),
      ]);
      dispatch({
        type: FETCH_CHECKOUT,
        payload: {
          item: checkoutItem.data.result,
          service: service.data.result,
          payment: payment.data.result,
        },
      });
    } catch (err) {
      throw err;
    }
  }, [dispatch]);

  const createCheckout = useCallback(async () => {
    try {
      const res = await CheckoutApi.createCheckout();

      dispatch({
        type: CREATE_CHECKOUT,
        payload: {item: res.data.result},
      });
    } catch (err) {
      throw err;
    }
  }, [dispatch]);

  const updateCheckout = useCallback(async (checkoutId, data) => {
    try {
      await CheckoutApi.updateCheckout(checkoutId, data);

      //update (userAddressId,serviceId,paymentId)
    } catch (err) {
      throw err;
    }
  }, []);

  const selectCheckout = useCallback(
    async (address, service, payment, status) => {
      try {
        dispatch({
          type: SELECT_CHECKOUT,
          payload: {
            address: address,
            service: service,
            payment: payment,
            status: status,
          },
        });
      } catch (err) {
        throw err;
      }
    },
    [dispatch]
  );
  const getTotalAmount = useCallback(
    (totalPrice, subTotal) => {
      dispatch({
        type: GET_TOTAL_AMOUNT,
        payload: {totalPrice: totalPrice, subTotal: subTotal},
      });
    },
    [dispatch]
  );

  const setProcessComplete = useCallback(() => {
    setIsProcessCompleted(true);
  }, []);
  return (
    <CheckoutContext.Provider
      value={{
        checkout: AllCheckout.checkout,
        selected: AllCheckout.selected,
        amount: AllCheckout.amount,
        isProcessCompleted: isProcessCompleted,
        fetchCheckout,
        createCheckout,
        selectCheckout,
        updateCheckout,
        getTotalAmount,
        setProcessComplete,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export {CheckoutContext};
