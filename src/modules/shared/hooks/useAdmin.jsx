import {useContext} from 'react';
import {AdminContext} from '../store/admin/AdminContext';

export default function useAdmin() {
  return useContext(AdminContext);
}
