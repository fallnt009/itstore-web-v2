import useAuth from '../../../shared/hooks/useAuth';

import ProfileManageSidebar from './sidebar/ProfileManageSidebar';
import ProfileManageSetting from './setting/ProfileManageSetting';

export default function ProfileManage() {
  const {authenUser} = useAuth();
  console.log(authenUser);
  //authen user
  //manage container
  //header
  //preview
  //picture
  //setting info
  return (
    <div>
      <div className="grid grid-cols-[1fr_4fr]">
        <div className="border-l">
          <ProfileManageSidebar />
        </div>
        <div className="border-l">
          <ProfileManageSetting authenUser={authenUser} />
        </div>
      </div>
    </div>
  );
}
