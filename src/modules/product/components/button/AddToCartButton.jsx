import {MdCheck} from 'react-icons/md';

import useProductButton from '../../hooks/useProductButton';

import {
  BUTTON_DEFAULT,
  BUTTON_ADDED,
} from '../../../shared/services/config/constants';

export default function AddToCartButton({
  productId,
  inStock = 0,
  title,
  style,
}) {
  const {buttonStatus, onAddCart} = useProductButton();

  const buttonTextMap = {
    [BUTTON_ADDED]: (
      <span className="flex gap-1 items-center">
        <MdCheck /> Added
      </span>
    ),
    [BUTTON_DEFAULT]: inStock <= 0 ? 'Out of Stock' : 'Add to Cart',
  };

  const handleClick = () => {
    if (buttonStatus === BUTTON_DEFAULT && inStock > 0) {
      onAddCart(productId, title);
    }
  };
  return (
    <button
      type="button"
      className={`flex justify-center align-middle box-border border rounded-lg ${
        style || 'p-2 px-4 font-semibold min-w-[130px] w-auto'
      }  ${
        inStock > 0
          ? 'border-indigo-600 bg-indigo-600 text-white  hover:text-indigo-600 hover:bg-white'
          : 'border-gray-300 bg-gray-300 text-gray-500 cursor-not-allowed'
      }`}
      onClick={handleClick}
      disabled={inStock <= 0 || buttonStatus === BUTTON_ADDED}
    >
      {buttonTextMap[buttonStatus] || 'Add to Cart'}
    </button>
  );
}
