import {useState} from 'react';

import SettingInfo from './info/SettingInfo';
import SettingPicture from './picture/SettingPicture';

export default function ProfileManageSetting({authenUser}) {
  //success
  const [isSuccess, setIsSuccess] = useState(false);
  //if selectImage
  //isSuccess true === pass
  //if not select can save === pass
  //if select but not success === not pass

  return (
    <div className="px-10">
      <div className="border-b pb-4">
        <h1 className="font-semibold">Account</h1>
        <p className="text-gray-500">Manage Account</p>
      </div>
      <SettingPicture
        authenUser={authenUser}
        setIsSuccess={setIsSuccess}
        isSuccess={isSuccess}
      />
      <SettingInfo isSuccess={isSuccess} />
    </div>
  );
}
