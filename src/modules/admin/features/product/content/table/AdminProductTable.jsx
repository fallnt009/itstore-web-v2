import AdminProductTableItem from './item/AdminProductTableItem';

export default function AdminProductTable({items, onOpenPopup}) {
  return (
    <table className="min-w-full table-fixed border-collapse text-center">
      <thead className="font-normal text-gray-600">
        <tr>
          <th className="py-2 w-10">ID</th>
          <th className="py-2 px-4 flex justify-start text-ellipsis line-clamp-1 whitespace-nowrap overflow-hidden border-x">
            Title
          </th>
          <th className="py-2 px-4 text-start w-24">Price</th>
          <th className="py-2 px-4 w-24">Status</th>
          <th className="py-2 px-4 w-32">Stock</th>
          <th className="py-2 px-4 w-32">Actions</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {items.map((product) => (
          <AdminProductTableItem
            key={product.id}
            product={product}
            onOpenPopup={onOpenPopup}
          />
        ))}
      </tbody>
    </table>
  );
}
