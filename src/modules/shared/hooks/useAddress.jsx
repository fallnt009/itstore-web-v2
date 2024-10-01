import {useContext} from 'react';
import {AddressContext} from '../store/address/AddressContext';

export default function useAddress() {
  return useContext(AddressContext);
}
