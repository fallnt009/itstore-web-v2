import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import useOrder from '../../../shared/hooks/useOrder';

import OrderHeader from './header/OrderHeader';
import OrderDetailProduct from './products/OrderDetailProduct';
import OrderPaymentStatus from './status/OrderPaymentStatus';
import OrderDelivery from './status/OrderDelivery';
import OrderDeliveryInfo from './status/OrderDeliveryInfo';
import OrderSummary from './summary/OrderSummary';

export default function OrderDetail() {
  //params
  const {orderNumber} = useParams();
  const {order, fetchOrderByNumber} = useOrder();
  //destruct order
  const {detail, product} = order;
  //fetch order by orderNumber
  useEffect(() => {
    fetchOrderByNumber(orderNumber);
  }, [fetchOrderByNumber, orderNumber]);

  console.log(detail);
  console.log(product);

  return (
    <div className="container">
      <div className="grid mx-24 border-2  rounded-2xl p-6">
        {/* <OrderHeader
          OrderDetail={OrderDetail}
          orderStatus={orderStatus}
          createdAt={createdAt}
        />
        <div className="overflow-y-auto max-h-[75vh] ">
          {orderItems.map((el) => (
            <OrderDetailProduct key={el.id} item={el} />
          ))}
        </div>
        <div className="grid grid-cols-2 border-t-2 py-5">
          <OrderPaymentStatus UserPayment={UserPayment} />
          <OrderDelivery OrderDetail={OrderDetail} />
        </div>
        <div className="grid grid-cols-2 border-t-2 py-5">
          <OrderDeliveryInfo OrderDetail={OrderDetail} />
          <OrderSummary totalAmount={totalAmount} OrderDetail={OrderDetail} />
        </div> */}
      </div>
    </div>
  );
}
