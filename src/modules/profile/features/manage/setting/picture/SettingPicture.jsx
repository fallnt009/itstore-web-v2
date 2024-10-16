import Avatar from '../../../../../shared/components/ui/Avatar';

export default function SettingPicture({authenUser}) {
  return (
    <div className="flex flex-col gap-3 mt-5">
      {/* <h2 className="font-semibold">Upload Picture</h2> */}
      <div className="flex justify-between items-center px-5 py-2">
        <div className="flex items-center gap-5">
          <Avatar size={100} src={authenUser.profileImage} />
          <div>
            <h1 className="font-semibold">Profile Picture</h1>
            <p className="text-gray-500">PNG,JPEG under 10MB</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <button className="text-sm font-semibold rounded-lg p-2 px-4 border-2 hover:text-indigo-700 hover:border-indigo-700 shadow-md">
            Upload new picture
          </button>
          <button className="text-sm font-semibold rounded-lg p-2 px-4 border-2 hover:text-red-500 hover:border-red-500 hover:bg-white bg-red-500 text-white shadow-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
