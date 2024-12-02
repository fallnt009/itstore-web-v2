import AdminProductTableItem from './item/AdminProductTableItem';

export default function AdminProductTable() {
  return (
    <table className="min-w-full table-fixed text-center">
      <thead className="font-normal text-gray-600">
        <tr>
          <th className="py-2 px-4 w-1/12">ID</th>
          <th className="py-2 px-4 flex justify-start text-ellipsis line-clamp-1 whitespace-nowrap overflow-hidden border-x">
            Title
          </th>
          <th className="py-2 px-4 w-1/12">Price</th>
          <th className="py-2 px-4 w-1/12">Status</th>
          <th className="py-2 px-4 w-1/12">Stock</th>
          <th className="py-2 px-4 w-2/12">Actions</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        <AdminProductTableItem />
        <AdminProductTableItem />
        <AdminProductTableItem />
        <AdminProductTableItem />
        <AdminProductTableItem />
        <AdminProductTableItem />
        <AdminProductTableItem />
        <AdminProductTableItem />
        <AdminProductTableItem />
        <AdminProductTableItem />
      </tbody>
    </table>
  );
}
