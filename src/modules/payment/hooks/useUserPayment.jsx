import {useCallback, useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

import usePayment from '../../shared/hooks/usePayment';
import useLoading from '../../shared/hooks/useLoading';
import useError from '../../shared/hooks/useError';

//routing
import {PAYMENT_AWATING} from '../../shared/services/config/routing';

//messages
import {UNEXPECTED_ERROR} from '../../shared/services/config/toast';

export default function useUserPayment() {
  //context
  const {userPayment, fetchUserPaymentByOrderId, updateUserPaymentById} =
    usePayment();
  const {error, errorStatus, setIsError} = useError();
  const {loading, startLoading, stopLoading} = useLoading();

  //react router
  const location = useLocation();
  const navigate = useNavigate();

  //State
  const [selectImage, setSelectImage] = useState([]);

  //destructuring
  const {id: userPaymentId, amount, Order} = userPayment;
  const orderNumber = Order?.OrderDetail?.orderNumber;
  const orderId = location.state.orderId;

  //fetch
  useEffect(() => {
    const loadUserPayment = async () => {
      startLoading();
      try {
        await fetchUserPaymentByOrderId(orderId);
      } catch (err) {
        //add error
        setIsError(err);
      } finally {
        stopLoading();
      }
    };
    loadUserPayment();
  }, [fetchUserPaymentByOrderId, orderId]);

  //function
  const updateUserPayment = useCallback(async () => {
    try {
      //make input option for bank transfer
      console.log(userPaymentId);

      //call api and userPaymentId
      await updateUserPaymentById(userPaymentId);
      //order status Change

      //navigate to payment awaiting confirmation
      navigate(PAYMENT_AWATING);
    } catch (err) {
      //toast
      toast.err(UNEXPECTED_ERROR);
    }
  }, [updateUserPaymentById, userPaymentId]);

  return {
    selectImage,
    orderNumber,
    amount,
    loading,
    error,
    errorStatus,
    setSelectImage,
    updateUserPayment,
  };
}
