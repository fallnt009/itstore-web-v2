import {NumericFormat} from 'react-number-format';
import {format} from 'date-fns';

import OrderActions from './actions/OrderActions';
import PaymentStatus from './status/PaymentStatus';
import ReviewStatus from './status/ReviewStatus';

export default function OrderContentTableItem({data}) {
  const {OrderDetail, OrderItems, UserPayment, id, orderDate} = data;

  const orderDateFormat = format(new Date(orderDate), 'dd MMM yyyy');

  const fullName =
    UserPayment?.User?.firstName + ' ' + UserPayment?.User?.lastName || '';

  //order items need to get qty of every obj and total
  const orderItemsTotalQty =
    OrderItems.reduce((acc, currentValue) => acc + currentValue.qty, 0) || 0;
  //userPayment Status,verify Id and Date null === unreview
  const reviewStatus =
    !UserPayment?.verifierId && !UserPayment?.verifyDate
      ? 'UNREVIEWED'
      : 'REVIEWED';

  //order deliveryDate ? 'date' :'N/A'
  const deliveryDate = OrderDetail?.deliveryDate || 'N/A';

  return (
    <tr className="text-gray-700 text-sm">
      <td className="border-t px-4 py-3 text-center">#{id}</td>
      <td className="border-t px-4 py-3 text-center">{orderDateFormat}</td>
      <td className="border-t px-4 py-3 text-center">
        <p className="line-clamp-1">{fullName}</p>
      </td>
      <td className="border-t px-4 py-3">
        <PaymentStatus status={UserPayment?.paymentStatus} />
      </td>
      <td className="border-t px-4 py-3 text-center">
        <NumericFormat
          value={UserPayment?.amount}
          displayType="text"
          thousandSeparator=","
          decimalScale={2}
          fixedDecimalScale={true}
          prefix="฿"
        />
      </td>
      <td className="border-t px-4 py-3 text-center">{deliveryDate}</td>
      <td className="border-t px-4 py-3 text-center">
        {orderItemsTotalQty} items
      </td>
      <td className="border-t px-4 py-3">
        <ReviewStatus status={reviewStatus} />
      </td>
      <td className="border-t px-4 py-3">
        <OrderActions />
      </td>
    </tr>
  );
}
