import {Link} from 'react-router-dom';

import Avatar from '../../../components/ui/Avatar';
import AuthMenuList from './AuthMenuList';

import {LOGIN} from '../../../services/config/routing';

export default function AuthMenu({authenUser, logout, open, onClose}) {
  return (
    <div
      className={`absolute z-100 right-0 bg-white py-3 px-2 border rounded-md shadow-sm w-96 text-indigo-700 ${
        open ? 'block' : 'hidden'
      }`}
    >
      {authenUser ? (
        <>
          <Link
            to={`/profile/${authenUser.id}`}
            className="flex p-2 px-2 gap-3 items-center rounded-md hover:bg-cerulean-blue-100"
            onClick={onClose}
          >
            <Avatar size={60} src={authenUser.profileImage} />
            <div className="flex flex-col items-start ">
              <span className="font-bold text-lg">
                {authenUser.firstName} {authenUser.lastName}
              </span>
              <small>Manage Profile</small>
            </div>
          </Link>
          <hr className="mx-2 my-2"></hr>
          <div className="flex flex-col items-start gap-3 ">
            <AuthMenuList authenUser={authenUser} logout={logout} />
          </div>
        </>
      ) : (
        <>
          <Link
            to={LOGIN}
            className="flex p-2 px-2 gap-3 items-center rounded-md hover:bg-cerulean-blue-100"
            onClick={onClose}
          >
            <Avatar size={60} />
            <div className="flex flex-col items-start ">
              <span className="font-bold text-lg">Welcome ! </span>
              <small>Click to Sign in</small>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
