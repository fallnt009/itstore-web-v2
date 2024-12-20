import {useCallback, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import usePayment from '../../shared/hooks/usePayment';
import useError from '../../shared/hooks/useError';
import useLoading from '../../shared/hooks/useLoading';

import {
  BANK_TRANSFER_PAYMENT,
  QR_PAYMENT,
} from '../../shared/services/config/routing';

export default function usePaymentGateway() {
  //context
  const {paymentMethod, fetchAllPaymentMethod} = usePayment();
  const {error, errorStatus, setIsError} = useError();
  const {loading, startLoading, stopLoading} = useLoading();
  //react router
  const location = useLocation();
  const navigate = useNavigate();

  //des
  const {orderId, orderNumber} = location.state;

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
  }, [fetchAllPaymentMethod, startLoading, stopLoading, setIsError]);

  const selectPaymentMethod = useCallback(
    (paymentId) => {
      //get Id and proceed to navigate
      switch (paymentId) {
        case 1:
          navigate(BANK_TRANSFER_PAYMENT, {state: {orderId: orderId}});
          break;
        case 2:
          navigate(QR_PAYMENT, {state: {orderId: orderId}});
          break;
        default:
          break;
      }
    },
    [navigate, orderId]
  );

  return {
    paymentMethod,
    orderNumber,
    loading,
    error,
    errorStatus,
    selectPaymentMethod,
  };
}
