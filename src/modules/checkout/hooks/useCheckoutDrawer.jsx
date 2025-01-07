import {useState, useEffect, useCallback} from 'react';
import useDrawer from '../../shared/hooks/useDrawer';
import useAddress from '../../shared/hooks/useAddress';

import AddressContainer from '../features/details/address/AddressContainer';
import AddressUpdateForm from '../features/details/address/forms/AddressUpdateForm';

export default function useCheckoutDrawer() {
  //drawer State

  const {isOpen, drawerContent, openDrawerWithContent, closeDrawer} =
    useDrawer();

  const {defaultAddress, updateAddress} = useAddress();

  const [selectedAddress, setSelectedAddress] = useState(null);

  //check default Address
  useEffect(() => {
    if (defaultAddress) {
      setSelectedAddress(defaultAddress);
    }
  }, [defaultAddress]);

  //handle Choose first
  //
  const handleChooseAddress = useCallback(() => {
    openDrawerWithContent(
      <AddressContainer
        openDrawerWithContent={openDrawerWithContent}
        onClose={closeDrawer}
      />
    );
  }, [openDrawerWithContent, closeDrawer]);

  //handle Edit
  //Can edit when selected only
  const handleEditClick = useCallback(() => {
    openDrawerWithContent(
      <AddressUpdateForm
        defaultAddress={defaultAddress}
        onClose={closeDrawer}
        updateAddress={updateAddress}
      />
    );
  }, [defaultAddress, openDrawerWithContent, closeDrawer, updateAddress]);

  return {
    isOpen,
    closeDrawer,
    drawerContent,
    handleChooseAddress,
    handleEditClick,
  };
}
