import {useState, useCallback} from 'react';
import {toast} from 'react-toastify';

import useAuth from '../../../../../../shared/hooks/useAuth';

import PasswordInput from '../../../../../components/PasswordInput';

import validatePassword from '../../../../../utils/validate-password';
import {
  UNEXPECTED_ERROR,
  PASSWORD_CHANGE_SUCCESS,
} from '../../../../../../shared/services/config/toast';

export default function PasswordPopup({onClose}) {
  const {updatePassword} = useAuth();

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
        setError(result);
      } else {
        setError({});
        //call api here
        const res = await updatePassword(input);
        if (res.status === 200) {
          toast.success(PASSWORD_CHANGE_SUCCESS);
          onClose();
        } else {
          toast.error(res.data.descEn);
        }
      }
    } catch (err) {
      toast.error(UNEXPECTED_ERROR);
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
