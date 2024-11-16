import {NumericFormat} from 'react-number-format';

import Image from '../../components/Image';
import QuantityBox from '../../components/QuantityBox';
import AddedButton from '../../components/AddedButton';

export default function CartContentItem({
  item,
  onQtyChange,
  onDelete,
  onAddWishlist,
  limit,
}) {
  const {Product} = item;
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
        <Image src={Product.productImage} width={110} height={110} />
      </div>
      <div className="grid h-full px-5">
        {/* product detail */}
        <div className="flex justify-between text-md text-stone-700">
          <div className="flex font-bold gap-5 justify-start ">
            {Product.title}
          </div>
          <div className="font-bold">
            {Product.ProductDiscount ? (
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
          <p>{Product.description}</p>
          {Product.ProductDiscount && (
            <div className="flex text-xs p-1 bg-red-500 text-white font-semibold">
              {Product?.ProductDiscount?.Discount?.amount}% off
            </div>
          )}
        </div>
        <div className="flex gap-8 mt-5 items-center text-stone-700">
          <div>
            <QuantityBox
              initialQty={item.qty}
              limit={limit}
              onChange={handleQuantityChange}
            />
          </div>
          <button
            type="button"
            className="font-bold text-sm border border-gray-600 hover:bg-indigo-700 px-6 py-2 rounded-3xl hover:text-white"
            onClick={() => onDelete(item.id)}
          >
            Remove
          </button>
          <AddedButton onClick={onAddWishlist} id={item.id} />
        </div>
      </div>
    </div>
  );
}
