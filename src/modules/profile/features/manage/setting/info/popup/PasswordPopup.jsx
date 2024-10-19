import {useState, useCallback} from 'react';
import {toast} from 'react-toastify';

import PasswordInput from '../../../../../components/PasswordInput';

import validatePassword from '../../../../../utils/validate-password';

export default function PasswordPopup({onClose}) {
  //seperate api
  const [input, setInput] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [error, setError] = useState({});

  const handleChangeInput = useCallback(
    (e) => {
      setInput({...input, [e.target.name]: e.target.value});
    },
    [input]
  );

  const handleSubmitPassword = async (e) => {
    try {
      e.preventDefault();
      const result = validatePassword(input);

      if (result) {
        console.log(result);

        setError(result);
      } else {
        setError({});
        //call api here
        toast.success('Password Changed Successfully');
        onClose();
      }
    } catch (err) {
      toast.error('Something went wrong. Please try again later.');
      onClose();
    }
  };

  return (
    <div className="w-96">
      <div className="py-2 px-5">
        <h1 className="font-semibold">Modify Password</h1>
      </div>
      <div className="grid gap-5 py-2 px-5">
        <div>
          <h1 className="text-sm text-gray-500 font-semibold pb-1">
            Current password
          </h1>
          <PasswordInput
            name="currentPassword"
            onChange={handleChangeInput}
            value={input.currentPassword}
            error={error.currentPassword}
          />
        </div>
        <div>
          <h1 className="text-sm text-gray-500 font-semibold pb-1">
            New password
          </h1>
          <PasswordInput
            name="newPassword"
            onChange={handleChangeInput}
            value={input.newPassword}
            error={error.newPassword}
          />
        </div>
        <div>
          <h1 className="text-sm text-gray-500 font-semibold pb-1">
            Confirm New password
          </h1>
          <PasswordInput
            name="confirmNewPassword"
            onChange={handleChangeInput}
            value={input.confirmNewPassword}
            error={error.confirmNewPassword}
          />
        </div>
        <button
          type="button"
          className="p-2 px-4 rounded-lg bg-indigo-700 text-white text-sm font-semibold border-indigo-700 hover:bg-white hover:text-indigo-700 border"
          onClick={handleSubmitPassword}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
