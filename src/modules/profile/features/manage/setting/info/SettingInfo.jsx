import {useCallback, useState} from 'react';

import Input from '../../../../../shared/components/ui/Input';
import PasswordInput from '../../../../components/PasswordInput';

import validateProfile from '../../../../utils/validate-profile';

export default function SettingInfo({authenUser}) {
  const {firstName, lastName, email, mobile} = authenUser;
  const dataForm = {
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    mobile: mobile || '',
    currentPassword: '',
    newPassword: '',
  };

  const [input, setInput] = useState(dataForm);
  const [error, setError] = useState({});

  const handleChangeInput = useCallback(
    (e) => {
      setInput({...input, [e.target.name]: e.target.value});
    },
    [input]
  );

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    //validate

    try {
      //loading
      //call api
      //set input
      //stop
      //toast
    } catch (err) {
      //toast
    } finally {
      //stopload
    }
  };

  //if password modify need to compare if not send err

  return (
    <div className="flex flex-col gap-3 pt-5">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <form onSubmit={handleSubmitForm}>
            <div className="border-b pb-5">
              <h1 className="font-semibold py-2">Full Name</h1>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <h1 className="text-sm text-gray-500 font-semibold pb-1">
                    First Name
                  </h1>
                  <Input
                    name="firstName"
                    type="text"
                    onChange={handleChangeInput}
                    value={input.firstName}
                    error={error.firstName}
                  />
                </div>
                <div>
                  <h1 className="text-sm text-gray-500 font-semibold pb-1">
                    Last Name
                  </h1>
                  <Input
                    name="lastName"
                    type="text"
                    onChange={handleChangeInput}
                    value={input.lastName}
                    error={error.lastName}
                  />
                </div>
              </div>
            </div>
            <div className="border-b pb-5 pt-3">
              <h1 className="font-semibold">Contact Email</h1>
              <p className="text-gray-500">
                Manage your accounts email address.
              </p>
              <div className="flex py-2">
                <div className="w-1/2">
                  <h1 className="text-sm text-gray-500 font-semibold pb-1">
                    Email
                  </h1>
                  <Input
                    name="email"
                    type="email"
                    onChange={handleChangeInput}
                    value={input.email}
                    error={error.email}
                  />
                </div>
                {/* <button /> */}
              </div>
            </div>
            <div className="border-b pb-5 pt-3">
              <h1 className="font-semibold">Password</h1>
              <p className="text-gray-500">Modify your current password.</p>
              <div className="grid grid-cols-2 gap-5 py-2">
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
              </div>
            </div>
            <div className="border-b pb-5 pt-3">
              <h1 className="font-semibold">Phone Number</h1>
              <p className="text-gray-500">Modify your current phone number.</p>
              <div className="grid grid-cols-2 gap-5 py-2">
                <div>
                  <h1 className="text-sm text-gray-500 font-semibold pb-1">
                    Phone Number
                  </h1>
                  <Input
                    name="mobile"
                    type="text"
                    onChange={handleChangeInput}
                    value={input.mobile}
                    error={error.mobile}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <button
            type="submit"
            className="text-sm font-semibold bg-indigo-700 text-white border rounded-lg p-2 px-4 hover:border-indigo-700 hover:bg-white hover:text-indigo-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
