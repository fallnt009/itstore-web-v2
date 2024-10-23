import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

import {HOME} from '../../../../shared/services/config/routing';

export default function WishlistBreadCrumb() {
  return (
    <div className="flex gap-2 items-center py-5 text-lg border-b">
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
        <h1>My Wishlist</h1>
      </div>
    </div>
  );
}
