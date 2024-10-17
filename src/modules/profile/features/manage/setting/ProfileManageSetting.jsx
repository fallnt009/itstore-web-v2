import SettingInfo from './info/SettingInfo';
import SettingPicture from './picture/SettingPicture';
export default function ProfileManageSetting({authenUser}) {
  return (
    <div className="px-10">
      <div className="border-b pb-4">
        <h1 className="font-semibold">Account</h1>
        <p className="text-gray-500">Manage Account</p>
      </div>
      <SettingPicture authenUser={authenUser} />
      <SettingInfo authenUser={authenUser} />
    </div>
  );
}
