import {MdDelete} from 'react-icons/md';
import {NumericFormat} from 'react-number-format';

export default function ProductCardHorizontal() {
  return (
    <div className="grid grid-cols-[1fr_4fr_1.5fr_1fr_0.5fr] py-1">
      <div className="h-[80px] w-[80px] border">Img</div>
      <div className="flex flex-col gap-1 pl-3">
        <p className="text-sm text-gray-700">Laptop</p>
        <h1 className="font-semibold">Macbook Air</h1>
      </div>
      <div className="flex gap-1 items-center text-sm font-medium">
        <input className="w-8 h-8 border rounded-md" value={3} />
        <span>x</span>
        <NumericFormat
          value="500"
          displayType="text"
          thousandSeparator=","
          prefix={'฿'}
        />
      </div>
      <div className="flex items-center text-sm font-medium">
        <NumericFormat
          value="1500"
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
