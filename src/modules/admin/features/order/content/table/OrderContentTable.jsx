import {MdSearchOff} from 'react-icons/md';

import OrderContentTableItem from './item/OrderContentTableItem';

export default function OrderContentTable({items}) {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gray-100 text-sm">
          <th className="text-gray-500 font-normal p-3 text-center w-20">
            No.
          </th>
          <th className="text-gray-500 font-normal p-3 text-left w-24">Date</th>
          <th className="text-gray-500 font-normal p-3 text-left ">Customer</th>
          <th className="text-gray-500 font-normal p-3 text-left w-24">
            Payment
          </th>
          <th className="text-gray-500 font-normal p-3 text-left w-24">
            Total
          </th>
          <th className="text-gray-500 font-normal p-3 text-left w-24">
            Delivery
          </th>
          <th className="text-gray-500 font-normal p-3 text-left w-24">
            Items
          </th>
          <th className="text-gray-500 font-normal p-3 text-left w-24">
            Review
          </th>
          <th className="text-gray-500 font-normal p-3 text-left w-24">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {items.length === 0 ? (
          <tr className="select-none">
            <td colSpan="9" className=" text-gray-500 py-8">
              <div className="flex flex-col items-center justify-center">
                <span className="pb-2">
                  <MdSearchOff size={70} />
                </span>

                <span className="text-xl text-gray-700 font-medium">
                  No Result found
                </span>
                <span className="text-sm">
                  No result match this filter criteria Change filters to show
                  results
                </span>
              </div>
            </td>
          </tr>
        ) : (
          items?.map((order) => (
            <OrderContentTableItem key={order.id} data={order} />
          ))
        )}
      </tbody>
    </table>
  );
}
