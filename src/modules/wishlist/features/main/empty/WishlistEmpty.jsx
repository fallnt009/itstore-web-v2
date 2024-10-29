import {Link} from 'react-router-dom';
import {MdOutlineList} from 'react-icons/md';

import {HOME} from '../../../../shared/services/config/routing';

export default function WishlistEmpty() {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <span className="py-2 text-indigo-600">
        <MdOutlineList size={150} />
      </span>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="font-semibold  text-4xl text-indigo-600">
          Your wishlist is empty! Right Now.
        </h1>

        <div className="flex flex-col justify-center items-center py-4 gap-2 text-gray-500 ">
          <p>Explore more about our products and add shortlist some items.</p>
        </div>
      </div>
      <div className="py-4">
        <Link
          type="button"
          className="p-2 px-4 rounded-lg border border-indigo-600 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600"
          to={HOME}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
