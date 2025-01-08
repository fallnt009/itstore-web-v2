import {useCallback, useEffect, useState} from 'react';

import useCheckout from '../../shared/hooks/useCheckout';
import useCart from '../../shared/hooks/useCart';
import useAddress from '../../shared/hooks/useAddress';
import useAuth from '../../shared/hooks/useAuth';
import useError from '../../shared/hooks/useError';

export default function useCheckoutDetail() {
  const {checkout, fetchCheckout, getTotalAmount} = useCheckout();
  const {userCart, fetchCart} = useCart();
  const {defaultAddress, fetchMyAddress} = useAddress();
  const {authenUser} = useAuth();
  const {error, errorStatus, setIsError} = useError();

  //destructuring
  const {item, payment, service} = checkout;
  //select state
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const [shippingAddress, setShippingAddress] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);

  //useEffect fetch if already have defalut address

  useEffect(() => {
    if (defaultAddress?.shipping) {
      setShippingAddress(defaultAddress?.shipping);
    }
    if (defaultAddress?.billing) {
      setBillingAddress(defaultAddress?.billing);
    }
  }, [defaultAddress?.billing, defaultAddress?.shipping]);

  //useEffect
  useEffect(() => {
    const loadCheckout = async () => {
      try {
        if (authenUser) {
          await Promise.all([fetchCart(), fetchMyAddress(), fetchCheckout()]);
        }
      } catch (err) {
        setIsError(err);
      }
    };
    loadCheckout();
  }, [authenUser, setIsError, fetchCart, fetchMyAddress, fetchCheckout]);

  //validate selectedPaymentId && selectedServiceId && BillingAddress && ShippingAddress && contact information
  //can submit

  const handleSelectService = useCallback((e) => {
    setSelectedService(JSON.parse(e.target.value));
  }, []);
  const handleSelectPayment = useCallback((e) => {
    setSelectedPayment(JSON.parse(e.target.value));
  }, []);

  return {
    checkoutInfo: item,
    cartItemList: userCart,
    paymentList: payment,
    serviceList: service,
    email: authenUser?.email,
    selectedService,
    selectedPayment,
    shippingAddress,
    billingAddress,
    error,
    errorStatus,
    handleSelectService,
    handleSelectPayment,
    getTotalAmount,
  };
}
