import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import {IoMdHeartEmpty, IoMdHeart} from 'react-icons/io';

import useCart from '../../../../../shared/hooks/useCart';
import useWishlist from '../../../../../shared/hooks/useWishlist';

import ProductCardImage from './ProductCardImage';
import ProductCardContentItem from './ProductCardContentItem';
import ProductCardButton from './button/ProductCardButton';

import {PRODUCT_INFO_NAV} from '../../../../../shared/services/config/routing';
import {UNEXPECTED_ERROR} from '../../../../../shared/services/config/toast';

export default function ProductCardContent({product, inWishlist}) {
  //add to Cart
  const {addCartItem} = useCart();
  const {addWishlist, deleteWishlist} = useWishlist();

  //product
  const {
    id,
    title,
    price,
    qtyInStock,
    ProductSubCategory,
    ProductDiscount,
    ProductImages,
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
        toast.success(`Remove ${title} form wishlist`);
      } else {
        //add wishlist
        await addWishlist(id);
        //toast
        toast.success(`Added ${title} to wishlist`);
      }
    } catch (err) {
      //err
      toast.error(UNEXPECTED_ERROR);
    }
  };

  return (
    <div className="text-sm border p-2">
      <Link
        className="flex flex-col justify-center"
        to={PRODUCT_INFO_NAV(categoryName, subCategoryName, slug)}
      >
        <div className="flex justify-center">
          <ProductCardImage size="250px" src={productImages} />
        </div>
        {/* Productbox */}
        <div className="px-2">
          <ProductCardContentItem
            title={title}
            subCategoryName={subCategoryName}
            price={price}
            discount={ProductDiscount?.Discount}
          />
        </div>
      </Link>
      <div className="flex items-center gap-3 px-2 pt-3 pb-10">
        {/* Add to Cart */}
        <ProductCardButton
          id={id}
          title={title}
          onAdd={addCartItem}
          qty={qtyInStock}
        />
        {/* {qtyInStock === 0 ? (
          <div className="rounded-lg p-2 border border-gray-400 bg-gray-400 text-white font-semibold ">
            Add to Cart
          </div>
        ) : (
          <button
            type="button"
            className="rounded-lg p-2 border border-indigo-600 bg-indigo-600 text-white font-semibold hover:text-indigo-600 hover:bg-white"
            // onClick={() => addCartItem(id)}
          >
            Add to Cart
          </button>
        )} */}
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
