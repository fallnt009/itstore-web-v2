import ProductFormTableItem from './item/ProductFormTableItem';

export default function ProductFormTable({items, bcsId, onSelectTag}) {
  return (
    <table className="w-full table-auto border-collapse text-center">
      <thead className="font-normal text-gray-600">
        <tr>
          <th className="py-2 px-4">ID</th>
          <th className="py-2 px-4 ">Brand</th>
          <th className="py-2 px-4 ">Sub Category</th>
          <th className="py-2 px-4">Action</th>
        </tr>
      </thead>
      <tbody className="text-gray-500">
        {items.length > 0 ? (
          items.map((tag) => (
            <ProductFormTableItem
              key={tag.id}
              tag={tag}
              selectedId={bcsId}
              onSelectTag={onSelectTag}
            />
          ))
        ) : (
          <tr className="bg-white">
            <td className="py-4 text-gray-500" colSpan={4}>
              No Result Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
