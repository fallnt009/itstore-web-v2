import {format} from 'date-fns';
import {NumericFormat} from 'react-number-format';

export default function HomeCardContentInfo({title, price, discount}) {
  const discountCal = Number(price) * (discount?.amount / 100);
  const discountPrice = price - discountCal;
  return (
    <div className="text-gray-700 pt-2 pb-5">
      <div className="flex flex-col items-start gap-1 px-3">
        <h3 className="font-semibold text-lg hover:underline">{title}</h3>
        {/* Price  */}
        <div>
          <div className={`font-semibold text-3xl text-black`}>
            {discount ? (
              <NumericFormat
                value={discountPrice}
                displayType="text"
                thousandSeparator=","
                prefix="฿"
              />
            ) : (
              <NumericFormat
                value={price}
                displayType="text"
                thousandSeparator=","
                prefix="฿"
              />
            )}
          </div>
        </div>
        {/* discount tag */}
        {discount ? (
          <div className="text-xs text-gray-500">
            <div className="flex gap-1 pt-1">
              <p className="p-1 bg-red-500 text-white font-semibold">
                Save {discount.amount} %
              </p>
            </div>
            <div className="py-2">
              until {format(new Date(discount.startDate), 'dd/MM/yyyy')} -
              {format(new Date(discount.endDate), 'dd/MM/yyyy')}
            </div>
          </div>
        ) : (
          // <div className="text-xs text-gray-500">
          //   <div className="flex gap-1 pt-1">
          //     <p className="p-1 bg-red-500 text-white font-semibold">
          //       Save 10 %
          //     </p>
          //   </div>
          //   <div className="py-2">until 11/12/21 - 15/12/21</div>
          // </div>
          <div></div>
        )}
      </div>
    </div>
  );
}
