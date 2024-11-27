import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

import {HOME} from '../../../../shared/services/config/routing';

import NewProductContentItem from './NewProductListContentItem';

import NotFound from '../not-found/NotFound';

export default function NewProductListContent({
  newProducts,
  inWishlist,
  loading,
}) {
  const {items} = newProducts;

  return (
    <div>
      <div className="py-5 bg-white">
        <div className="flex items-center gap-2">
          <Link to={HOME}>Home</Link>
          <span className="text-indigo-600">
            <MdKeyboardArrowRight size={20} />
          </span>
          <h1 className="font-semibold">New Arrivals</h1>
        </div>
      </div>
      <header className="flex justify-center mb-5 py-10 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500">
        <h1 className="text-4xl font-semibold text-white">New Arrivals</h1>
      </header>
      <div className="grid ">
        <div>
          {items.length === 0 ? (
            <NotFound />
          ) : (
            <NewProductContentItem
              products={items}
              inWishlist={inWishlist}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
}
