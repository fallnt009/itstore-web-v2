import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

import HelpCenterContentMenu from './content/HelpCenterContentMenu';
import HelpCenterGetInfo from './content/HelpCenterGetInfo';
import HelpCenterGetSupport from './content/HelpCenterGetSupport';

import {HOME} from '../../shared/services/config/routing';

export default function HelpCenterContent() {
  return (
    <div className="py-10">
      <div className="flex gap-2 items-center py-5 text-lg border-b px-10">
        <Link
          to={HOME}
          className="flex items-center gap-2 cursor-pointer hover:text-indigo-700"
        >
          <h1 className="font-semibold">Home</h1>
        </Link>
        <span>
          <MdKeyboardArrowRight />
        </span>
        <div className="flex items-center gap-2 cursor-pointer hover:text-indigo-700">
          <h1>Help Center</h1>
        </div>
      </div>
      <div className="flex justify-center py-40 font-semibold text-4xl bg-gradient-to-b  from-gray-500 via-gray-400 ">
        <h1 className="text-white">How Can We Help You ?</h1>
      </div>
      <div className="px-10 py-10">
        <HelpCenterContentMenu />
        <HelpCenterGetInfo />
        <HelpCenterGetSupport />
      </div>
    </div>
  );
}
