import {useContext} from 'react';
import {WishlistContext} from '../store/wishlist/WishlistContext';

export default function useWishlist() {
  return useContext(WishlistContext);
}
