import {useCallback, useEffect, useState} from 'react';
import {toast} from 'react-toastify';

import useAddress from '../../shared/hooks/useAddress';
import useCheckout from '../../shared/hooks/useCheckout';

import {UNEXPECTED_ERROR} from '../../shared/services/config/toast';

export default function useAddressContent(addressType, onClose) {
  //useAddress
  const {
    address,
    defaultAddress,
    setDefaultShippingAddress,
    setDefaultBillingAddress,
  } = useAddress();
  //useCheckout
  const {checkout, updateCheckout} = useCheckout();

  //get checkout item
  const {item} = checkout;
  //get default shipping or billing
  const {shipping, billing} = defaultAddress;

  //state
  const [selectedId, setSelectedId] = useState(null);

  //useEffect when detect default setSelected
  useEffect(() => {
    if (addressType === 'shipping') {
      setSelectedId(shipping?.id);
    } else if (addressType === 'billing') {
      setSelectedId(billing?.id);
    }
  }, [addressType, shipping?.id, billing?.id]);

  //check isDefault return true or false
  const isDefaultAddress = useCallback(() => {
    if (addressType === 'shipping') {
      return selectedId === (shipping?.id || null);
    } else if (addressType === 'billing') {
      return selectedId === (billing?.id || null);
    }
    return false;
  }, [addressType, selectedId, shipping?.id, billing?.id]);

  const handleSelectedId = useCallback(async (id) => {
    setSelectedId(id);
  }, []);

  const handleAddAddress = async (addressType, addressId) => {
    try {
      if (!addressType || !item.id) {
        console.log(addressType, item.id);
        return toast.error('Address type or item ID is missing');
      }

      const updatePromises = [];

      if (addressType === 'shipping') {
        updatePromises.push(setDefaultShippingAddress(addressId));
        updatePromises.push(
          updateCheckout(item.id, {shipmentAddressId: addressId})
        );
      } else if (addressType === 'billing') {
        updatePromises.push(setDefaultBillingAddress(addressId));
        updatePromises.push(
          updateCheckout(item.id, {billingAddressId: addressId})
        );
      }

      await Promise.all(updatePromises); //update

      onClose();
    } catch (err) {
      toast.error(UNEXPECTED_ERROR);
    }
  };

  return {
    address,
    selectedId,
    isDefaultAddress,
    handleSelectedId,
    handleAddAddress,
  };
}
