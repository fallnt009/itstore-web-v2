import {NumericFormat} from 'react-number-format';
import {format} from 'date-fns';

import OrderActions from './actions/OrderActions';
import PaymentStatus from '../../../../../components/status/PaymentStatus';
import ReviewStatus from '../../../../../components/status/ReviewStatus';

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
  //odd:bg-white even:bg-slate-50 for strip
  return (
    <tr className="text-gray-700 text-sm">
      <td className="p-3 text-center whitespace-nowrap">#{id}</td>
      <td className="p-3 text-left whitespace-nowrap">{orderDateFormat}</td>
      <td className="p-3 text-left whitespace-nowrap">{fullName}</td>
      <td className="p-3 whitespace-nowrap">
        <PaymentStatus status={UserPayment?.paymentStatus} />
      </td>
      <td className="p-3 text-left whitespace-nowrap">
        <NumericFormat
          value={UserPayment?.amount}
          displayType="text"
          thousandSeparator=","
          decimalScale={2}
          fixedDecimalScale={true}
          prefix="฿"
        />
      </td>
      <td className="p-3 text-left whitespace-nowrap">{deliveryDate}</td>
      <td
        className="p-3 text-left
       whitespace-nowrap"
      >
        {orderItemsTotalQty} items
      </td>
      <td className="p-3 whitespace-nowrap">
        <ReviewStatus status={reviewStatus} />
      </td>
      <td className="p-3 whitespace-nowrap">
        <OrderActions />
      </td>
    </tr>
  );
}
