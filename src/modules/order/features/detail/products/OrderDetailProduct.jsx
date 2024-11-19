import {NumericFormat} from 'react-number-format';

import Image from '../../../components/Image';

export default function OrderDetailProduct({item}) {
  const {Product, qty, totalPrice} = item || {};

  const productName = Product?.title;
  const productDesc = Product?.description;

  return (
    <div className="grid items-start grid-cols-[1fr_4fr] py-5 px-2 border-b">
      {/* product img */}
      <div className="grid justify-center w-full">
        <Image src={Product?.ProductImages[0]?.path || ''} size="100px" />
      </div>
      <div className="grid">
        {/* product detail */}
        <div className="flex justify-between text-md text-stone-700">
          <div className="flex font-semibold gap-5 justify-start ">
            {productName}
          </div>
          <div className="font-semibold">
            <NumericFormat
              value={totalPrice}
              displayType="text"
              thousandSeparator=","
              decimalScale={2}
              fixedDecimalScale={true}
              suffix=" THB"
            />
          </div>
        </div>
        <div className="flex justify-between text-sm text-stone-500 ">
          <p>{productDesc}</p>
          <div className="items-center">qty : {qty}</div>
        </div>
        <div className="flex gap-8 mt-5 items-center text-stone-500"></div>
      </div>
    </div>
  );
}
