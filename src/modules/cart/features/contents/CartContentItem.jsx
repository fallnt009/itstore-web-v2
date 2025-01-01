import {Link} from 'react-router-dom';
import {NumericFormat} from 'react-number-format';
import {MdDelete} from 'react-icons/md';

import Image from '../../components/Image';
import QuantityBox from '../../components/QuantityBox';
import AddedButton from '../../components/AddedButton';

import {PRODUCT_INFO_NAV} from '../../../shared/services/config/routing';

export default function CartContentItem({
  item,
  inWishlist,
  onQtyChange,
  onDelete,
  onAddWishlist,
  limit,
}) {
  const {Product} = item;
  const {id, slug, ProductSubCategory} = Product;
  //destruct

  const productId = id || null;
  const productImage = Product?.ProductImages?.[0]?.path || '' || '';

  //slug
  const categorySlug =
    ProductSubCategory?.BrandCategorySub?.BrandCategory?.MainCategory?.slug ||
    '';
  const subCategorySlug =
    ProductSubCategory?.BrandCategorySub?.SubCategory?.slug || '';
  const productSlug = slug || '';

  //discount
  const discountCalculate = () => {
    const discountPercentage = Product?.ProductDiscount?.Discount?.amount || 0;
    const discountPrice = (Number(Product.price) * discountPercentage) / 100;

    const discountTotal = Product.price - discountPrice;

    return discountTotal;
  };

  const handleQuantityChange = (newQty) => {
    onQtyChange(item.id, newQty);
  };

  return (
    <div className="grid items-start grid-cols-[1fr_4fr] border-t-2 p-5 px-5">
      {/* product img */}
      <div className="grid w-full justify-center">
        <Image src={productImage} width={110} height={110} />
      </div>
      <div className="grid h-full px-5">
        {/* product detail */}
        <div className="flex justify-between text-md text-stone-700">
          <Link
            className="flex font-semibold gap-5 justify-start cursor-pointer hover:underline"
            to={PRODUCT_INFO_NAV(categorySlug, subCategorySlug, productSlug)}
          >
            {Product?.title}
          </Link>
          <div className="font-bold">
            {Product?.ProductDiscount ? (
              <div className="flex gap-2">
                <NumericFormat
                  value={item.qty * parseFloat(Product.price)}
                  displayType="text"
                  thousandSeparator=","
                  suffix={' THB'}
                  className="line-through"
                />
                <NumericFormat
                  value={item.qty * discountCalculate()}
                  displayType="text"
                  thousandSeparator=","
                  suffix={' THB'}
                  className="text-red-500"
                />
              </div>
            ) : (
              <NumericFormat
                value={item.qty * parseFloat(Product.price)}
                displayType="text"
                thousandSeparator=","
                suffix={' THB'}
              />
            )}
          </div>
        </div>
        <div className="flex justify-between text-sm text-stone-500 ">
          <p>{Product?.description}</p>
          {Product?.ProductDiscount && (
            <div className="flex text-xs p-1 bg-red-500 text-white font-semibold">
              {Product?.ProductDiscount?.Discount?.amount}% off
            </div>
          )}
        </div>
        <div className="flex gap-5 pt-5 items-center text-stone-700">
          <div>
            <QuantityBox
              initialQty={item.qty}
              limit={limit}
              onChange={handleQuantityChange}
            />
          </div>
          <div className="flex justify-between w-full">
            <AddedButton
              inWishlist={inWishlist}
              onClick={onAddWishlist}
              id={productId}
            />
            <button
              type="button"
              className="flex items-center gap-2 font-semibold text-sm text-gray-600 hover:text-red-500"
              onClick={() => onDelete(item.id)}
            >
              <span>
                <MdDelete size={20} />
              </span>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
