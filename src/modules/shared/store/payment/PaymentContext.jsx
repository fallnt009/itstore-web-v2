import {createContext, useCallback, useState} from 'react';

import * as PaymentApi from '../../services/apis/payment-api';

const PaymentContext = createContext();

export default function PaymentContextProvider({children}) {
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [userPayment, setUserPayment] = useState({});

  //fetch all payment
  const fetchAllPaymentMethod = useCallback(async () => {
    try {
      const res = await PaymentApi.getAllPaymentMethod();
      setPaymentMethod(res.data.result);
    } catch (err) {
      throw err;
    }
  }, []);

  const fetchUserPaymentByOrderId = useCallback(async (orderId) => {
    try {
      //known Order
      const res = await PaymentApi.getUserPaymentByOrderId(orderId);
      setUserPayment(res.data.result);
    } catch (err) {
      throw err;
    }
  }, []);

  const updateUserPaymentById = useCallback(async (userPaymentId) => {
    try {
      await PaymentApi.updateUserPaymentById(userPaymentId);
      //
    } catch (err) {
      throw err;
    }
  }, []);

  return (
    <PaymentContext.Provider
      value={{
        userPayment,
        paymentMethod,
        fetchAllPaymentMethod,
        fetchUserPaymentByOrderId,
        updateUserPaymentById,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

export {PaymentContext};
