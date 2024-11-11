import {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import usePayment from '../../shared/hooks/usePayment';
import useError from '../../shared/hooks/useError';
import useLoading from '../../shared/hooks/useLoading';

export default function usePaymentGateway() {
  //context
  const {paymentMethod, fetchAllPaymentMethod} = usePayment();
  const {error, errorStatus, setIsError} = useError();
  const {loading, startLoading, stopLoading} = useLoading();
  //
  const navigate = useNavigate();
  //state
  const [selectedPaymentId, setSelectedPaymentId] = useState(null);
  //fetch
  useEffect(() => {
    const loadPaymentMethod = async () => {
      startLoading();
      try {
        await fetchAllPaymentMethod();
      } catch (err) {
        setIsError(err);
      } finally {
        stopLoading();
      }
    };
    loadPaymentMethod();
  }, [fetchAllPaymentMethod]);

  const selectPaymentMethod = useCallback((paymentId) => {
    setSelectedPaymentId(paymentId);
  }, []);

  const submitPaymentMethod = useCallback((paymentId) => {
    //handle update paymentId in userPayment of this order

    //get Id and proceed to navigate
    switch (paymentId) {
      case 1:
        navigate('bb');
        break;
      case 2:
        navigate('qr');
        break;
      default:
        break;
    }
  }, []);

  return {
    paymentMethod,
    selectedPaymentId,
    loading,
    error,
    errorStatus,
    selectPaymentMethod,
  };
}
