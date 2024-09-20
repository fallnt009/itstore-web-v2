import {MdKeyboardDoubleArrowDown} from 'react-icons/md';

import NavSelect from '../../features/nav-select/NavSelect';

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-start text-xl  text-indigo-700 gap-7 px-12  select-none ">
        <div className={`flex gap-2 items-center h-10 pb-2 font-semibold`}>
          Explore Our Product
          <span>
            <MdKeyboardDoubleArrowDown />
          </span>
        </div>
      </div>
      <div>
        <NavSelect />
      </div>
    </div>
  );
}
