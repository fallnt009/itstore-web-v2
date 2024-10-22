import {useCallback, useEffect, useState} from 'react';
import {toast} from 'react-toastify';

import useAuth from '../../../../../shared/hooks/useAuth';
import useLoading from '../../../../../shared/hooks/useLoading';

import Input from '../../../../../shared/components/ui/Input';
import Popup from '../../../../../shared/components/popup/Popup';
import SettingPicture from './picture/SettingPicture';
import PasswordPopup from './popup/PasswordPopup';

import validateProfile from '../../../../utils/validate-profile';
import {UNEXPECTED_ERROR} from '../../../../../shared/services/config/toast';

export default function SettingInfo() {
  const {authenUser, updateProfile} = useAuth();
  const {startLoading, stopLoading} = useLoading();

  const dataForm = {
    firstName: authenUser?.firstName || '',
    lastName: authenUser?.lastName || '',
    email: authenUser?.email || '',
    mobile: authenUser?.mobile || '',
  };
  //form and err
  const [initialInput, setInitialInput] = useState(dataForm);
  const [currentInput, setCurrentInput] = useState(dataForm);
  const [error, setError] = useState({});
  //img state
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectImage, setSelectImage] = useState(null);
  //popup
  const [isOpen, setIsOpen] = useState(false);
  //edit state
  const [isEdited, setIsEdited] = useState(false);

  //sync input state
  useEffect(() => {
    setCurrentInput(dataForm);
    setInitialInput(dataForm);
  }, [authenUser]);

  // Compare currentInput with initialInput to check if edited
  useEffect(() => {
    const isFormEdited =
      JSON.stringify(currentInput) !== JSON.stringify(initialInput);
    setIsEdited(isFormEdited);
  }, [currentInput, initialInput]);

  //track image if edit
  useEffect(() => {
    if (selectImage) {
      setIsEdited(true);
    }
  }, [selectImage]);

  const handleChangeInput = useCallback(
    (e) => {
      setCurrentInput({...currentInput, [e.target.name]: e.target.value});
    },
    [currentInput]
  );

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    //avoid submission if no change
    if (!isEdited && !selectImage) return;

    startLoading();
    const formData = new FormData();

    formData.append('firstName', currentInput.firstName);
    formData.append('lastName', currentInput.lastName);
    formData.append('email', currentInput.email);
    formData.append('mobile', currentInput.mobile);
    formData.append('profileImage', selectImage);

    try {
      //validate
      const result = validateProfile(currentInput);
      if (result) {
        setError(result);
      } else {
        setError({});
        //call api
        await updateProfile(authenUser.id, formData);
        //reset state
        setInitialInput(currentInput);
        setIsEdited(false);
        setSelectImage(null);
        //toast
        toast.success('Profile Updated Successfully');
      }
    } catch (err) {
      //toast
      toast.error(UNEXPECTED_ERROR);
    } finally {
      //stopload
      stopLoading();
    }
  };
  const handleTogglePopup = () => {
    setIsOpen(true);
  };
  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <SettingPicture
        authenUser={authenUser}
        setIsSuccess={setIsSuccess}
        isSuccess={isSuccess}
        selectImage={selectImage}
        setSelectImage={setSelectImage}
      />
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
                      value={currentInput.firstName}
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
                      value={currentInput.lastName}
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
                      value={currentInput.email}
                      error={error.email}
                    />
                  </div>
                  {/* <button /> */}
                </div>
              </div>
              <div className="border-b pb-5 pt-3">
                <h1 className="font-semibold">Password</h1>
                <p className="text-gray-500">Modify your current password.</p>
                <div className="pt-5">
                  <button
                    type="button"
                    className="p-2 px-4 rounded-lg bg-indigo-700 text-white text-sm font-semibold border-indigo-700 hover:bg-white hover:text-indigo-700 border"
                    onClick={handleTogglePopup}
                  >
                    Change Password
                  </button>
                </div>
                {/* //passwordpopup */}
                <Popup isOpen={isOpen} onClose={handleClosePopup}>
                  <PasswordPopup onClose={handleClosePopup} />
                </Popup>
              </div>
              <div className="border-b pb-5 pt-3">
                <h1 className="font-semibold">Phone Number</h1>
                <p className="text-gray-500">
                  Modify your current phone number.
                </p>
                <div className="grid grid-cols-2 gap-5 py-2">
                  <div>
                    <h1 className="text-sm text-gray-500 font-semibold pb-1">
                      Phone Number
                    </h1>
                    <Input
                      name="mobile"
                      type="text"
                      onChange={handleChangeInput}
                      value={currentInput.mobile}
                      error={error.mobile}
                    />
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <button
                  type="submit"
                  className={`text-sm font-semibold border rounded-lg p-2 px-4  ${
                    selectImage
                      ? isSuccess && isEdited
                        ? 'bg-indigo-700 text-white border-indigo-700 hover:bg-white hover:text-indigo-700'
                        : 'text-white bg-gray-300'
                      : isEdited
                      ? 'bg-indigo-700 text-white border-indigo-700 hover:bg-white hover:text-indigo-700'
                      : 'text-white bg-gray-300'
                  }`}
                  disabled={selectImage ? !isSuccess || !isEdited : !isEdited}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
