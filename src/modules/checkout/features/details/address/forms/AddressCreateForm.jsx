import {useState} from 'react';
import {toast} from 'react-toastify';

import useLoading from '../../../../../shared/hooks/useLoading';

import Input from '../../../../../shared/components/ui/Input';

//validate
import validateAddress from '../../../../utils/validate-address';

const dataForm = {
  fullName: '',
  phoneNumber: '',
  addressLine1: '',
  addressLine2: '',
  province: '',
  postalCode: '',
};

export default function AddressCreateForm({onClose, addAddress}) {
  const [input, setInput] = useState(dataForm);
  const [error, setError] = useState({});

  const {startLoading, stopLoading} = useLoading();

  const handleChangeInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateAddress(input);
      if (result) {
        setError(result);
      } else {
        startLoading();
        setError({});
        await addAddress(input);
        setInput(dataForm);
        stopLoading();
        toast.success('Create Success');
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
      onClose();
    }
  };

  return (
    <form className="flex flex-col gap-5 mx-5 " onSubmit={handleSubmitForm}>
      <header className="flex flex-col p-5 font-semibold text-lg mx-5">
        <h4 className="flex justify-center p-2 pb-5">Add new address</h4>
        <p className="text-sm font-normal text-stone-600">
          All information will be saved to your account, for easy access the
          next time you need it.
        </p>
      </header>
      <div className="flex flex-col gap-5 px-5">
        <div className="flex flex-col">
          <h4 className="text-stone-600">Full Name</h4>
          <Input
            type="text"
            name="fullName"
            onChange={handleChangeInput}
            value={input.fullName}
            error={error.fullName}
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-stone-600">Phone Number</h4>
          <Input
            type="text"
            name="phoneNumber"
            onChange={handleChangeInput}
            value={input.phoneNumber}
            error={error.phoneNumber}
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-stone-600">Address Line 1</h4>
          <Input
            type="text"
            name="addressLine1"
            onChange={handleChangeInput}
            value={input.addressLine1}
            error={error.addressLine1}
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-stone-600">Address Line 2</h4>
          <Input
            type="text"
            name="addressLine2"
            onChange={handleChangeInput}
            value={input.addressLine2}
            error={error.addressLine2}
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-stone-600">Postal Code</h4>
          <Input
            type="text"
            name="postalCode"
            onChange={handleChangeInput}
            value={input.postalCode}
            error={error.postalCode}
            maxLength={5}
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-stone-600">Province</h4>
          <Input
            type="text"
            name="province"
            onChange={handleChangeInput}
            value={input.province}
            error={error.province}
          />
        </div>
      </div>
      <button
        type="submit"
        className="flex justify-center rounded-full border-2 py-4 px-5 text-white bg-indigo-700 font-semibold"
      >
        Save and use this address
      </button>
    </form>
  );
}
