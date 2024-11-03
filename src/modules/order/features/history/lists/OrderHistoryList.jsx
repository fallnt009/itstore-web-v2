// import OrderHistoryFilter from './filter/OrderHistoryFilter';
import OrderHistoryItem from './item/OrderHistoryItem';
import OrderHistoryEmpty from './empty/OrderHistoryEmpty';

import ParginationIndicator from '../../../../shared/components/ui/ParginationIndicator';

export default function OrderHistoryList({
  status,
  orderFilter,
  onClick,
  page,
  totalPages,
  onChange,
}) {
  console.log(orderFilter);

  const name = status.name || 'N/A';
  return (
    <div className="px-10">
      <div className="pt-10 pb-5">
        <h1 className="font-semibold text-4xl">Order History</h1>
        <p className="px-1 pt-2 text-gray-500">{name}</p>
      </div>
      {/* <OrderHistoryFilter /> */}
      <div className="border rounded-lg">
        <div className="grid grid-cols-5 p-2 px-5 font-semibold border-b">
          <h4>Order Number</h4>
          <h4>Order Date</h4>
          <h4>Total</h4>
          <h4>Order Status</h4>
          <h4 className="flex justify-center">Action</h4>
        </div>
        <div className="flex-col flex px-5">
          {orderFilter.length <= 0 ? (
            <OrderHistoryEmpty />
          ) : (
            orderFilter.map((item) => (
              <OrderHistoryItem key={item.id} order={item} onClick={onClick} />
            ))
          )}
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <ParginationIndicator
          page={page}
          totalPages={totalPages}
          handleChange={onChange}
        />
      </div>
    </div>
  );
}
