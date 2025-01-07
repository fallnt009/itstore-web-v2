import {useState, useCallback, useEffect} from 'react';
import {toast} from 'react-toastify';

import useAddress from '../../shared/hooks/useAddress';

import validateAddress from '../utils/validate-address';

const dataForm = {
  fullName: '',
  phoneNumber: '',
  addressLine1: '',
  addressLine2: '',
  province: '',
  postalCode: '',
};

export default function useAddressForm({onClose}) {
  //useAddress
  const {addAddress} = useAddress();

  //input and error
  const [formValues, setFormValues] = useState(dataForm);
  const [formErrors, setFormErrors] = useState({});

  //handle input
  const handleChangeInput = useCallback(
    (e) => {
      const {name, value} = e.target;
      setFormValues({...formValues, [name]: value});

      //validate errors
      const singleFieldErrors = validateAddress({[name]: value});
      setFormErrors({
        ...formErrors,
        [name]: singleFieldErrors ? singleFieldErrors[name] : '',
      });
    },
    [formValues, formErrors]
  );

  // handle submit
  const handleSubmitForm = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        const errors = validateAddress(formValues);
        if (errors) {
          setFormErrors(errors);
        } else {
          setFormErrors({});

          await addAddress(formValues);
          setFormValues(dataForm);
          toast.success('Create Success');
        }
      } catch (err) {
        toast.error(err.response?.data.message);
      } finally {
        // stopLoading();
        onClose();
      }
    },
    [formValues, addAddress, onClose]
  );

  return {formValues, formErrors, handleChangeInput, handleSubmitForm};
}
