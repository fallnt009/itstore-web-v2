import {NumericFormat} from 'react-number-format';
import Image from '../../components/Image';
import QuantityBox from '../../components/QuantityBox';

export default function CartContentItem({item, onQtyChange, onDelete, limit}) {
  const {Product} = item;

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
            <NumericFormat
              value={item.qty * parseFloat(Product.price)}
              displayType="text"
              thousandSeparator=","
              suffix={' THB'}
            />
          </div>
        </div>
        <div className="flex text-sm text-stone-500 ">
          <p>{Product.description}</p>
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
          <button
            type="button"
            className="font-bold text-sm hover:bg-cerulean-blue-800 px-6 py-2 rounded-3xl border border-gray-600 hover:bg-indigo-700 hover:text-white"
          >
            Save to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
