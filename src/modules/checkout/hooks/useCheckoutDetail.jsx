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

  const [shippingAddressId, setShippingAddressId] = useState(null);
  const [billingAddressId, setBillingAddressId] = useState(null);

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

  console.log(defaultAddress);

  return {
    checkoutInfo: item,
    cartItemList: userCart,
    paymentList: payment,
    serviceList: service,
    selectedService,
    selectedPayment,
    defaultAddress,
    handleSelectService,
    handleSelectPayment,
    getTotalAmount,
  };
}
