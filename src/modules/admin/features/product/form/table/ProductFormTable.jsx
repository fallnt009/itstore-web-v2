import ProductFormTableItem from './item/ProductFormTableItem';

export default function ProductFormTable() {
  //pargination 6
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
      <tbody className="text-gray-700">
        {/* {items.map((product) => (
      <AdminProductTableItem key={product.id} product={product} />
    ))} */}

        <ProductFormTableItem />
        <ProductFormTableItem />
        <ProductFormTableItem />
        <ProductFormTableItem />
        <ProductFormTableItem />
        <ProductFormTableItem />
      </tbody>
    </table>
  );
}
