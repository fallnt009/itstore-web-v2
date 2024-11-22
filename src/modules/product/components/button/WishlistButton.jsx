import {IoMdHeartEmpty, IoMdHeart} from 'react-icons/io';
import useProductButton from '../../hooks/useProductButton';

export default function WishlistButton({productId, title}) {
  const {inWishlist, onAddWishlist} = useProductButton();

  const compareWishlist = inWishlist?.some(
    (item) => item.productId === productId
  );

  return (
    <button
      className="rounded-full p-2  hover:text-gray-600 text-indigo-600 "
      type="button"
      onClick={() => onAddWishlist(productId, title, compareWishlist)}
    >
      {compareWishlist ? <IoMdHeart size={25} /> : <IoMdHeartEmpty size={25} />}
    </button>
  );
}
