import {createContext, useCallback, useReducer} from 'react';

import checkoutReducer, {
  CREATE_CHECKOUT,
  FETCH_CHECKOUT,
  INIT_CHECKOUT,
  SELECT_CHECKOUT,
  UPDATE_CHECKOUT,
} from './checkoutReducer';

import * as CheckoutApi from '../../services/apis/checkout-api';

const CheckoutContext = createContext();

export default function CheckoutContextProvider({children}) {
  const [AllCheckout, dispatch] = useReducer(checkoutReducer, INIT_CHECKOUT);
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
      return err.response;
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
      return err.response;
    }
  }, [dispatch]);

  const updateCheckout = useCallback(async (checkoutId, data) => {
    try {
      console.log(checkoutId, data);

      await CheckoutApi.updateCheckout(checkoutId, data);

      //update (userAddressId,serviceId,paymentId)
    } catch (err) {
      return err.response;
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
        return err.response;
      }
    },
    [dispatch]
  );

  return (
    <CheckoutContext.Provider
      value={{
        checkout: AllCheckout.checkout,
        selected: AllCheckout.selected,
        fetchCheckout,
        createCheckout,
        selectCheckout,
        updateCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export {CheckoutContext};
