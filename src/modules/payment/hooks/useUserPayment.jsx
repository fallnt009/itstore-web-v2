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
//constant
import {TRANSACTION_AWAITING} from '../../shared/services/config/constants';

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
  //date & time
  const [dateTime, setDateTime] = useState('');

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
  const updateUserPaymentAwait = useCallback(async () => {
    try {
      //use type if come from bank transfer need to validate before submit

      const formData = new FormData();

      formData.append('paymentStatus', TRANSACTION_AWAITING);
      if (dateTime) {
        formData.append('paymentDate', dateTime);
      }
      if (selectImage) {
        formData.append('paymentImage', selectImage[0].file);
      }

      //call api and userPaymentId
      await updateUserPaymentById(userPaymentId, formData);

      //navigate to payment awaiting confirmation
      navigate(PAYMENT_AWATING);
    } catch (err) {
      console.log(err);
      //toast
      toast.error(UNEXPECTED_ERROR);
    }
  }, [updateUserPaymentById, userPaymentId, navigate]);

  const submitPaymentDateTime = useCallback((utcString) => {
    setDateTime(utcString);
  }, []);
  const submitPaymentImage = useCallback((file) => {
    setSelectImage(file);
  }, []);

  return {
    selectImage,
    orderNumber,
    amount,
    loading,
    error,
    errorStatus,
    submitPaymentDateTime,
    submitPaymentImage,
    updateUserPaymentAwait,
  };
}
