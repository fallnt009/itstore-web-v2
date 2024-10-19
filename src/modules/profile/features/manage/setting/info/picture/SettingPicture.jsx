import {useEffect, useRef, useState} from 'react';

import useLoading from '../../../../../../shared/hooks/useLoading';

import Avatar from '../../../../../../shared/components/ui/Avatar';

export default function SettingPicture({
  authenUser,
  isSuccess,
  setIsSuccess,
  selectImage,
  setSelectImage,
}) {
  const [imagePreview, setImagePreview] = useState(authenUser?.profileImage);
  const [errorMsg, setErrorMsg] = useState('');

  const {startLoading, stopLoading} = useLoading();

  const hiddenFileInput = useRef(null);
  //toggle upload
  const handleToggleUpload = () => {
    hiddenFileInput.current.click();
  };
  //handle toggle delete
  const handleToggleDelete = () => {
    //popup confirm if yes or no
    //proceed to delete
    //close popup
    startLoading();
    setSelectImage(null);
    setImagePreview(null);
    setErrorMsg(false);
    setIsSuccess(false);
    stopLoading();
  };

  //handle Change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectImage(file);
      validateImageFile(file);
    }
  };
  //validate imagefile
  const validateImageFile = (file) => {
    const MAX_FILE_SIZE = 5120;
    const validTypes = ['image/jpeg', 'image/png'];

    //check if file has been selected
    if (!file) {
      setErrorMsg('Please Choose File');
      setIsSuccess(false);
      return;
    }

    // Check file type
    if (!validTypes.includes(file.type)) {
      setErrorMsg('Only PNG and JPEG formats are allowed.');
      setIsSuccess(false);
      return;
    }

    //calculate file size
    const fileSizeKilobyte = file.size / 1024;

    //check if file size more than 5 mb
    if (fileSizeKilobyte > MAX_FILE_SIZE) {
      setErrorMsg('File Size is more than max limit.');
      setIsSuccess(false);
      return;
    }

    //reset Error message
    setErrorMsg('');
    setIsSuccess(true);
  };

  useEffect(() => {
    if (selectImage) {
      const previewUrl = URL.createObjectURL(selectImage);
      setImagePreview(previewUrl);
      //cleanup
      return () => {
        URL.revokeObjectURL(previewUrl);
      };
    } else if (!selectImage && authenUser?.profileImage) {
      setImagePreview(authenUser.profileImage);
    }
  }, [selectImage, authenUser?.profileImage]);

  return (
    <div className="flex flex-col gap-3 mt-5">
      <div className="flex justify-between items-center px-5 py-2">
        <div className="flex items-center gap-5">
          <div>
            <Avatar size={100} src={imagePreview} />
          </div>
          <div>
            <h1 className="font-semibold">Profile Picture</h1>
            <p className="text-gray-500">PNG , JPEG under 5MB</p>
            <p className="text-red-500 font-semibold">{errorMsg}</p>
            {isSuccess && (
              <p className="text-green-500 font-semibold">Validation Success</p>
            )}
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <button
            type="button"
            className="text-sm font-semibold rounded-lg p-2 px-4 border-2 hover:text-indigo-700 hover:border-indigo-700 shadow-md"
            onClick={handleToggleUpload}
          >
            Upload new picture
          </button>
          <input
            type="file"
            className="hidden"
            ref={hiddenFileInput}
            onChange={handleImageChange}
          ></input>
          <button
            type="button"
            className="text-sm font-semibold rounded-lg p-2 px-4 border-2 border-red-500 hover:text-red-500 hover:border-red-500 hover:bg-white bg-red-500 text-white shadow-md"
            onClick={handleToggleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
