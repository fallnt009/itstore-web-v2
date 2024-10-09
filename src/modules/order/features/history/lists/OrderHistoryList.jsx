import OrderHistoryFilter from './filter/OrderHistoryFilter';
import OrderHistoryItem from './item/OrderHistoryItem';

export default function OrderHistoryList({orderFilter, onClick}) {
  return (
    <div className="pt-12 px-10">
      <OrderHistoryFilter />
      <div className="grid grid-cols-5 py-2 border-b-2  font-semibold">
        <h4>Order Number</h4>
        <h4>Order Date</h4>
        <h4>Total</h4>
        <h4>Order Status</h4>
        <h4>Action</h4>
      </div>
      {orderFilter.map((item) => (
        <OrderHistoryItem key={item.id} order={item} onClick={onClick} />
      ))}
    </div>
  );
}
