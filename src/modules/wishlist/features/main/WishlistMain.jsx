import {useEffect, useState} from 'react';

import useWishlist from '../../../shared/hooks/useWishlist';
import useError from '../../../shared/hooks/useError';

import WishlistBreadCrumb from './breadcrumb/WishlistBreadCrumb';
import WishlistList from './list/WishlistList';

import ParginationIndicator from '../../../shared/components/ui/ParginationIndicator';
import ErrorPage from '../../../shared/features/error/ErrorPage';
import WishlistEmpty from './empty/WishlistEmpty';

export default function WishlistMain() {
  const {Wishlist, fetchMyWishlist} = useWishlist();
  const {error, errorStatus, setIsError} = useError();

  const {items, totalPages} = Wishlist;

  const [page, setPage] = useState(1);

  // fetch wishlist
  useEffect(() => {
    const loadWishlist = async () => {
      try {
        await fetchMyWishlist(page, 8);
      } catch (err) {
        setIsError(err);
      }
    };
    loadWishlist();
  }, [fetchMyWishlist, page, setIsError]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <div>
      <WishlistBreadCrumb />
      <div className="pt-10 pb-5">
        <h1 className="font-semibold text-4xl">My Wishlist</h1>
      </div>
      {items.length <= 0 ? (
        <WishlistEmpty />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
