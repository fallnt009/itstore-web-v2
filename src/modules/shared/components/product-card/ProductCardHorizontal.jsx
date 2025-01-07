import {MdDelete} from 'react-icons/md';
import {NumericFormat} from 'react-number-format';

import Image from '../ui/Image';

export default function ProductCardHorizontal({item = {}}) {
  const {qty, Product} = item;

  const discountPercentage = Product?.ProductDiscount?.Discount?.amount || 0;
  const basePrice = parseFloat(Product?.price || 0);
  const discountedPrice = basePrice - (basePrice * discountPercentage) / 100;

  //need handle remove Cart

  return (
    <div className="grid grid-cols-[1fr_4fr_1.5fr_1fr_0.5fr] py-1">
      <div className="h-[80px] w-[80px] border">
        <Image alt="productImg" src={Product?.ProductImages?.[0]?.path} />
      </div>
      <div className="flex flex-col gap-1 pl-3">
        <p className="text-sm text-gray-700">
          {Product?.ProductSubCategory?.BrandCategorySub?.SubCategory?.title ||
            'N/A'}
        </p>
        <h1 className="font-semibold">{Product?.title || 'N/A'}</h1>
      </div>
      <div className="flex gap-2 items-center text-sm font-medium">
        {qty} x
        <NumericFormat
          value={discountedPrice}
          displayType="text"
          thousandSeparator=","
          prefix={'฿'}
        />
      </div>
      <div className="flex items-center text-sm font-medium">
        <NumericFormat
          value={discountedPrice * (qty || 1) || 0}
          displayType="text"
          thousandSeparator=","
          prefix={'฿'}
        />
      </div>
      <div className="flex items-center">
        <button>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
