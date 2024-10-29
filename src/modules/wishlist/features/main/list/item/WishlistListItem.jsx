import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import {NumericFormat} from 'react-number-format';
import {MdDeleteForever} from 'react-icons/md';

import useCart from '../../../../../shared/hooks/useCart';
import useWishlist from '../../../../../shared/hooks/useWishlist';

import Image from '../../../../components/Image';
import WishlistAddCartButton from './button/WishlistAddCartButton';

import {PRODUCT_INFO_NAV} from '../../../../../shared/services/config/routing';
import {
  UNEXPECTED_ERROR,
  REMOVE_WISHLIST,
} from '../../../../../shared/services/config/toast';

export default function WishlistListItem({item}) {
  const {Product} = item || {};

  const {
    id,
    title,
    description,
    price,
    ProductSubCategory,
    ProductImages,
    ProductDiscount,
  } = Product;

  const {addCartItem} = useCart();
  const {deleteWishlist} = useWishlist();

  //Product
  const productImage = Product?.ProductImages?.[0]?.path || '';

  //Slug
  const categorySlug =
    Product?.ProductSubCategory?.BrandCategorySub?.BrandCategory?.MainCategory
      ?.slug;
  const subCategorySlug =
    Product?.ProductSubCategory?.BrandCategorySub?.SubCategory?.slug;
  const productSlug = Product?.slug;

  //discount
  //if product discount show discount one if not show normal one
  const discountAmount = ProductDiscount?.Discount?.amount;
  const discountPercentage = discountAmount / 100;

  const discountCal = Number(price) * discountPercentage;
  const discountPrice = price - discountCal;

  //handle delete
  const handleRemoveWishlist = async () => {
    try {
      await deleteWishlist(id);
      //toast
      toast.success(REMOVE_WISHLIST(title));
    } catch (err) {
      toast.err(UNEXPECTED_ERROR);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-[0.7fr_5fr] p-5 border-2 border-gray-300">
        <Link
          className="block justify-center w-[150px]"
          to={PRODUCT_INFO_NAV(categorySlug, subCategorySlug, productSlug)}
        >
          <Image src={productImage} size="150px" />
        </Link>
        <div className="px-5">
          {/* product detail */}
          <div className="flex flex-col text-md text-stone-700">
            <Link
              className="flex font-semibold gap-5 justify-start cursor-pointer hover:text-indigo-700"
              to={PRODUCT_INFO_NAV(categorySlug, subCategorySlug, productSlug)}
            >
              {title}
            </Link>
            <div className="flex justify-between text-sm text-stone-500 ">
              <p>{description}</p>
            </div>
            <div className="font-semibold text-xl">
              {ProductDiscount ? (
                <div className="flex gap-3">
                  <div className="line-through">
                    <NumericFormat
                      value={price}
                      displayType="text"
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale={true}
                      suffix=" THB"
                    />
                  </div>
                  <div className="font-semibold">
                    <NumericFormat
                      value={discountPrice}
                      displayType="text"
                      thousandSeparator=","
                      decimalScale={2}
                      fixedDecimalScale={true}
                      suffix=" THB"
                    />
                  </div>
                  <div className="text-xs flex gap-1 pt-1">
                    <p className="p-1 bg-red-500 text-white font-semibold">
                      Save {discountAmount} %
                    </p>
                  </div>
                </div>
              ) : (
                <NumericFormat
                  value={price}
                  displayType="text"
                  thousandSeparator=","
                  decimalScale={2}
                  fixedDecimalScale={true}
                  suffix=" THB"
                />
              )}
            </div>
            <div className="flex items-center gap-8 pt-9">
              <WishlistAddCartButton
                id={id}
                title={title}
                onAdd={addCartItem}
                qty={Product?.qtyInStock}
              />

              <button
                type="button"
                className="text-red-500 hover:text-gray-600"
                onClick={handleRemoveWishlist}
              >
                <MdDeleteForever size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
