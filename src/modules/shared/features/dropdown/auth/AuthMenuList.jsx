import {Link, useNavigate} from 'react-router-dom';
import {MdHistory, MdLogout, MdAdminPanelSettings} from 'react-icons/md';

import {EMPLOYEE} from '../../../services/config/constants';
import {ORDER_HISTORY} from '../../../services/config/routing';

import AuthMenuItem from './item/AuthMenuItem';

export default function AuthMenuList({authenUser, logout}) {
  const navigate = useNavigate();
  const handleOnClickHistory = () => {
    navigate(ORDER_HISTORY);
  };
  return (
    <>
      <AuthMenuItem
        icon={<MdHistory />}
        title="Order History"
        onClick={handleOnClickHistory}
      />
      {authenUser.roles === EMPLOYEE ? (
        <Link to="/admin-panel" className="w-full">
          <button className="flex  gap-2 p-2 rounded-md hover:bg-slate-200 items-center w-full">
            <span className="rounded-full bg-indigo-700 text-white p-2">
              <MdAdminPanelSettings />
            </span>
            <p className="text-sm font-regular">Admin Panel</p>
          </button>
        </Link>
      ) : (
        ''
      )}
      {/* LOGOUT */}
      <button
        className="flex  gap-2 p-2 rounded-md hover:bg-slate-200 items-center w-full"
        onClick={logout}
      >
        <span className="rounded-full bg-indigo-700 text-white p-2">
          <MdLogout />
        </span>
        <p className="text-sm font-regular">Log Out</p>
      </button>
    </>
  );
}
