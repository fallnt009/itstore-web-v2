import OrderHeader from '../../../../order/features/detail/header/OrderHeader';
import OrderDetailProduct from '../../../../order/features/detail/products/OrderDetailProduct';
import OrderPaymentStatus from '../../../../order/features/detail/status/OrderPaymentStatus';
import OrderDelivery from '../../../../order/features/detail/status/OrderDelivery';
import OrderDeliveryInfo from '../../../../order/features/detail/status/OrderDeliveryInfo';
import OrderSummary from '../../../../order/features/detail/summary/OrderSummary';

export default function TrackingOrderContent({order}) {
  const {detail, product, currentStep, isCancel} = order;
  const {OrderDetail, UserPayment, totalAmount, orderStatus, createdAt} =
    detail;

  return (
    <div className="grid p-6 border-2 rounded-xl">
      <OrderHeader
        OrderDetail={OrderDetail}
        orderStatus={orderStatus}
        createdAt={createdAt}
        currentStep={currentStep}
        isCancel={isCancel}
      />
      <div className="overflow-y-auto max-h-[75vh] ">
        {product?.map((el) => (
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
      </div>
    </div>
  );
}
