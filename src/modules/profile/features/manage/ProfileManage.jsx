import {useState} from 'react';
import useAuth from '../../../shared/hooks/useAuth';

import ProfileManageSidebar from './sidebar/ProfileManageSidebar';
import ProfileManageSetting from './setting/ProfileManageSetting';

export default function ProfileManage() {
  const {authenUser} = useAuth();
  const [indexSlider, setIndexSlider] = useState(0);

  // console.log(authenUser);
  //authen user
  //manage container
  //header
  //preview
  //picture
  //setting info

  const handleToggleClickIndex = (index) => {
    setIndexSlider(index);
  };
  return (
    <div>
      <div className="grid grid-cols-[1fr_4fr]">
        <div className="border-l">
          <ProfileManageSidebar
            index={indexSlider}
            onClick={handleToggleClickIndex}
          />
        </div>
        <div className="border-l">
          {indexSlider === 0 && (
            <ProfileManageSetting authenUser={authenUser} />
          )}
        </div>
      </div>
    </div>
  );
}
