import OrderContentTableItem from './item/OrderContentTableItem';

export default function OrderContentTable({items}) {
  const menuLists = [
    {id: 1, title: 'No.', size: 'w-[5%]'},
    {id: 2, title: 'Date', size: 'w-[10%]'},
    {id: 3, title: 'Customer', size: 'w-[10%]'},
    {id: 4, title: 'Payment', size: 'w-[2%]'},
    {id: 5, title: 'Total', size: 'w-[10%]'},
    {id: 6, title: 'Delivery', size: 'w-[8%]'},
    {id: 7, title: 'Items', size: 'w-[10%]'},
    {id: 8, title: 'Review', size: 'w-[2%]'},
    {id: 9, title: 'Action', size: 'w-[10%]'},
  ];
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 text-sm">
            {menuLists.map((item) => (
              <th
                className={`text-gray-500 font-normal py-3 border-l ${item.size}`}
                key={item.id}
              >
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items?.map((order) => (
            <OrderContentTableItem key={order.id} data={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
