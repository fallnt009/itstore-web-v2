import SettingInfo from './info/SettingInfo';

export default function ProfileManageSetting() {
  //success
  //if selectImage
  //isSuccess true === pass
  //if not select can save === pass
  //if select but not success === not pass

  //move setting picture to setting info for better state management

  return (
    <div className="px-10">
      <div className="border-b pb-4">
        <h1 className="font-semibold">Account</h1>
        <p className="text-gray-500">Manage Account</p>
      </div>
      <SettingInfo />
    </div>
  );
}
