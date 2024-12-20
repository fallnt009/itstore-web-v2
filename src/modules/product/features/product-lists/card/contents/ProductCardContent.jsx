import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {IoMdHeartEmpty, IoMdHeart} from 'react-icons/io';

import useCart from '../../../../../shared/hooks/useCart';
import useWishlist from '../../../../../shared/hooks/useWishlist';

import ProductCardImage from './ProductCardImage';
import ProductCardContentItem from './ProductCardContentItem';
import ProductCardButton from './button/ProductCardButton';

import {
  PRODUCT_INFO_NAV,
  LOGIN,
} from '../../../../../shared/services/config/routing';
import {
  UNEXPECTED_ERROR,
  ADD_WISHLIST,
  REMOVE_WISHLIST,
} from '../../../../../shared/services/config/toast';

export default function ProductCardContent({product, inWishlist}) {
  //add to Cart
  const {addCartItem} = useCart();
  const {addWishlist, deleteWishlist} = useWishlist();
  const navigate = useNavigate();

  //product
  const {
    id,
    title,
    price,
    qtyInStock,
    ProductSubCategory,
    ProductDiscount,
    ProductImages,
    isNewArrival,
    slug,
  } = product;

  const subCategoryName =
    ProductSubCategory?.BrandCategorySub?.SubCategory?.slug || 'unknown';
  const categoryName =
    ProductSubCategory?.BrandCategorySub?.BrandCategory?.MainCategory?.slug ||
    'unknown';

  const productImages = ProductImages[0]?.path;

  const handleToggleWishlist = async () => {
    try {
      if (inWishlist) {
        //delete wishlist
        await deleteWishlist(id);
        //toast
        toast.success(REMOVE_WISHLIST(title));
      } else {
        //add wishlist
        await addWishlist(id);
        //toast
        toast.success(ADD_WISHLIST(title));
      }
    } catch (err) {
      //err
      //if not login go to login page
      if (err.status === 401) {
        navigate(LOGIN);
      } else {
        toast.error(UNEXPECTED_ERROR);
      }
    }
  };

  return (
    <div className="box-border overflow-hidden w-[240px] text-sm p-2 border border-white shadow-lg transition-shadow rounded-lg grid-rows-3 cursor-pointer hover:shadow-blue-100 ">
      <Link
        className="flex flex-col justify-center pt-5"
        to={PRODUCT_INFO_NAV(categoryName, subCategoryName, slug)}
      >
        <div className="flex justify-center">
          <div className="block relative ">
            {isNewArrival && (
              <span className="flex absolute left-0 text-xs p-1 bg-red-500 text-white font-semibold">
                New Arrival
              </span>
            )}
            {ProductDiscount && (
              <span className="flex absolute left-0 text-xs p-1 bg-red-500 text-white font-semibold">
                {ProductDiscount?.Discount?.amount || 0}% off
              </span>
            )}
            <ProductCardImage size="250px" src={productImages} />
          </div>
        </div>
      </Link>
      {/* Productbox */}
      <div className="flex justify-start px-1">
        <ProductCardContentItem
          title={title}
          subCategoryName={subCategoryName}
          price={price}
          discount={ProductDiscount?.Discount}
          isNewArrival={isNewArrival}
        />
      </div>
      <div className="flex justify-start items-center gap-3 px-1 pt-3 pb-5">
        {/* Add to Cart */}
        <ProductCardButton
          id={id}
          title={title}
          onAdd={addCartItem}
          qty={qtyInStock}
        />

        {/* Add Wishlist */}
        {inWishlist ? (
          <button
            className="rounded-full p-2  hover:text-gray-600 text-indigo-600 "
            type="button"
            onClick={handleToggleWishlist}
          >
            <IoMdHeart size={25} />
          </button>
        ) : (
          <button
            className="rounded-full p-2 hover:text-gray-600  text-indigo-600 "
            type="button"
            onClick={handleToggleWishlist}
          >
            <IoMdHeartEmpty size={25} />
          </button>
        )}
      </div>
    </div>
  );
}
