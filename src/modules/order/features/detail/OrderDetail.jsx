import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

import OrderHeader from './header/OrderHeader';
import OrderDetailProduct from './products/OrderDetailProduct';
import OrderPaymentStatus from './status/OrderPaymentStatus';
import OrderDelivery from './status/OrderDelivery';
import OrderDeliveryInfo from './status/OrderDeliveryInfo';
import OrderSummary from './summary/OrderSummary';
import OrderDetailLoading from './loading/OrderDetailLoading';

import ErrorPage from '../../../shared/features/error/ErrorPage';

import {HOME, ORDER_HISTORY} from '../../../shared/services/config/routing';

import useOrderDetail from '../../hooks/useOrderDetail';

export default function OrderDetail() {
  const {order, orderNumber, error, errorStatus, loading} = useOrderDetail();

  //destruct order
  const {detail, product, currentStep, isCancel} = order;
  const {OrderDetail, UserPayment, orderStatus, totalAmount, createdAt} =
    detail;

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <div className="my-10 mx-10">
      {loading ? (
        <OrderDetailLoading />
      ) : (
        <>
          <div className="flex gap-2 items-center py-5 text-lg">
            <Link
              to={HOME}
              className="flex items-center gap-2 cursor-pointer hover:text-indigo-700"
            >
              <h1 className="font-semibold">Home</h1>
            </Link>
            <span>
              <MdKeyboardArrowRight />
            </span>
            <Link
              to={ORDER_HISTORY}
              className="flex items-center gap-2 cursor-pointer hover:text-indigo-700"
            >
              <h1 className="font-semibold">Order History</h1>
            </Link>
            <span>
              <MdKeyboardArrowRight />
            </span>
            <div className="flex items-center gap-2">
              <p>{orderNumber}</p>
            </div>
          </div>
          <div className="block p-6">
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
              <OrderSummary
                totalAmount={totalAmount}
                OrderDetail={OrderDetail}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
