import {MdAdd, MdCheck} from 'react-icons/md';

export default function AddedButton({inWishlist, onClick, id}) {
  return (
    <button
      type="button"
      onClick={() => onClick(id, inWishlist)}
      className={`flex items-center gap-2 font-semibold text-sm 
    ${
      inWishlist
        ? 'text-green-600 hover:underline'
        : 'text-gray-600 hover:underline'
    }`}
    >
      <span>{inWishlist ? <MdCheck /> : <MdAdd />}</span>
      {inWishlist ? 'Already In Wishlist' : 'Add to Wishlist'}
    </button>
  );
}
