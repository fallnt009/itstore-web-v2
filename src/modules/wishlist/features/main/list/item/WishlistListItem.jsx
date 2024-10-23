import {Link} from 'react-router-dom';
import {NumericFormat} from 'react-number-format';
import {MdDeleteForever} from 'react-icons/md';

import useCart from '../../../../../shared/hooks/useCart';
import useWishlist from '../../../../../shared/hooks/useWishlist';

import Image from '../../../../components/Image';
import WishlistAddCartButton from './button/WishlistAddCartButton';

import {PRODUCT_INFO_NAV} from '../../../../../shared/services/config/routing';

export default function WishlistListItem({item}) {
  const {Product} = item || {};

  const {addCartItem} = useCart();
  const {deleteWishlist} = useWishlist();

  //Product
  const productId = Product?.id;
  const productImage = Product?.productImage; //fix this
  const productName = Product?.title;
  const productDesc = Product?.description;
  const productPrice = Product?.price;
  //Slug
  const categorySlug =
    Product?.ProductSubCategory?.BrandCategorySub?.BrandCategory?.MainCategory
      ?.slug;
  const subCategorySlug =
    Product?.ProductSubCategory?.BrandCategorySub?.SubCategory?.slug;
  const productSlug = Product?.slug;

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
              {productName}
            </Link>
            <div className="flex justify-between text-sm text-stone-500 ">
              <p>{productDesc}</p>
            </div>
            <div className="font-semibold text-xl">
              <NumericFormat
                value={productPrice}
                displayType="text"
                thousandSeparator=","
                decimalScale={2}
                fixedDecimalScale={true}
                suffix=" THB"
              />
            </div>
            <div className="flex items-center gap-8 pt-9">
              <WishlistAddCartButton
                id={productId}
                title={productName}
                onAdd={addCartItem}
                qty={Product?.qtyInStock}
              />

              <button
                type="button"
                className="text-red-500 hover:text-gray-600"
                onClick={() => deleteWishlist(productId)}
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
