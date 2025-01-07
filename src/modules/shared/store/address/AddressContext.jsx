import {createContext, useCallback, useReducer} from 'react';

import * as AddressApi from '../../services/apis/address-api';

import addressReducer, {
  INIT_ADDRESS,
  FETCH_ADDRESS,
  ADD_ADDRESS,
  DELETE_ADDRESS,
  EDIT_ADDRESS,
  SET_DEFAULT_ADDRESS,
} from './addressReducer';

const AddressContext = createContext();

export default function AddressContextProvider({children}) {
  const [AllAddress, dispatch] = useReducer(addressReducer, INIT_ADDRESS);

  //fetch address
  const fetchMyAddress = useCallback(async () => {
    try {
      const res = await AddressApi.getMyAddress();

      dispatch({
        type: FETCH_ADDRESS,
        payload: {address: res.data?.result},
      });
    } catch (err) {
      throw err;
    }
  }, [dispatch]);

  //create Address
  const addAddress = useCallback(async (newAddress) => {
    try {
      const res = await AddressApi.createAddress(newAddress);
      dispatch({
        type: ADD_ADDRESS,
        payload: {newAddress: res.data.result},
      });
    } catch (err) {
      throw err;
    }
  }, []);

  //update Address
  const updateAddress = useCallback(async (addressId, updatedAddress) => {
    try {
      const res = await AddressApi.updateAddress(addressId, updatedAddress);
      dispatch({
        type: EDIT_ADDRESS,
        payload: {id: addressId, updatedAddress: res.data.result},
      });
    } catch (err) {
      throw err;
    }
  }, []);

  //delete Address
  const deleteAddress = useCallback(async (addressId) => {
    try {
      await AddressApi.deleteAddress(addressId);
      dispatch({
        type: DELETE_ADDRESS,
        payload: {id: addressId},
      });
    } catch (err) {
      throw err;
    }
  }, []);

  //set default
  const setDefaultAddress = useCallback(async (addressId) => {
    try {
      const res = await AddressApi.updateDefault(addressId);
      dispatch({
        type: SET_DEFAULT_ADDRESS,
        payload: {address: res.data.result},
      });
    } catch (err) {
      throw err;
    }
  }, []);

  return (
    <AddressContext.Provider
      value={{
        address: AllAddress.address,
        defaultAddress: AllAddress.defaultAddress,
        addAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress,
        fetchMyAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export {AddressContext};
