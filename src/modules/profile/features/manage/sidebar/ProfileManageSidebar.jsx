import {MdHome, MdAccountCircle} from 'react-icons/md';

export default function ProfileManageSidebar() {
  return (
    <div>
      <div className="flex items-center gap-1 py-3 px-3 hover:bg-slate-200 cursor-pointer">
        <span className="text-gray-500">
          <MdHome size={35} />
        </span>
        <h1 className="text-gray-500 font-semibold text-lg">Home</h1>
      </div>
      <div className="border-t">
        <h1 className="text-gray-500 py-2 px-3 font-semibold text-xs">
          GENERAL
        </h1>
        <div className="flex items-center gap-2 py-3 px-3 hover:bg-slate-200 cursor-pointer">
          <span className="text-gray-500">
            <MdAccountCircle size={35} />
          </span>
          <h1 className="text-gray-500 font-semibold text-lg">Account</h1>
        </div>
      </div>
    </div>
  );
}
