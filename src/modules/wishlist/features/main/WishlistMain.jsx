import {useEffect, useState} from 'react';

import useWishlist from '../../../shared/hooks/useWishlist';

import WishlistBreadCrumb from './breadcrumb/WishlistBreadCrumb';
import WishlistList from './list/WishlistList';

import ParginationIndicator from '../../../shared/components/ui/ParginationIndicator';

export default function WishlistMain() {
  const {Wishlist, fetchMyWishlist} = useWishlist();
  const {items, totalPages} = Wishlist;

  const [page, setPage] = useState(1);

  // fetch wishlist
  useEffect(() => {
    fetchMyWishlist(page, 8);
  }, [fetchMyWishlist, page]);
  // keep wishlist

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="">
      <WishlistBreadCrumb />
      <div className="pt-10 pb-5">
        <h1 className="font-semibold text-4xl">My Wishlist</h1>
      </div>
      <div className="pt-5">
        <WishlistList wishlist={items} />
      </div>
      <div className="flex justify-center py-5">
        <ParginationIndicator
          page={page}
          totalPages={totalPages}
          handleChange={handleChangePage}
        />
      </div>
    </div>
  );
}
