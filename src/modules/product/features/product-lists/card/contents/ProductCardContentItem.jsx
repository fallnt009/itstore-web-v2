import {format} from 'date-fns';
import {NumericFormat} from 'react-number-format';

export default function ProductCardContentItem({
  title,
  subCategoryName,
  price,
  discount,
}) {
  const discountCal = Number(price) * (discount?.amount / 100);
  const discountPrice = price - discountCal;
  return (
    <div className="text-gray-700 pt-5 pb-2">
      <div className="flex flex-col items-start gap-1">
        <h3 className="font-bold">{title}</h3>
        <p className=" font-regular text-sm">{subCategoryName.toUpperCase()}</p>
        {/* Price  */}
        <div>
          <div
            className={`font-bold text-2xl ${discount ? 'line-through' : ''}`}
          >
            <NumericFormat
              value={price}
              displayType="text"
              thousandSeparator=","
              suffix=" THB"
            />
          </div>
        </div>
        {/* discount tag */}
        {discount ? (
          <div className="text-sm">
            <div className="flex justify-between font-semibold">
              <NumericFormat
                value={discountPrice}
                displayType="text"
                thousandSeparator=","
                suffix={' THB'}
              />

              <div className="text-red-500">{discount.amount}% off</div>
            </div>
            <div>
              until {format(new Date(discount.startDate), 'dd/MM/yyyy')} -
              {format(new Date(discount.endDate), 'dd/MM/yyyy')}
            </div>
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  );
}
