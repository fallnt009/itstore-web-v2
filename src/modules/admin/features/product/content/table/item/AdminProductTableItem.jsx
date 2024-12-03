export default function AdminProductTableItem({product}) {
  return (
    <tr className="bg-white border-b">
      <td className="py-2 px-4">{product.id}</td>
      <td className="py-2 flex justify-start line-clamp-1">{product.title}</td>
      <td className="py-2 px-4">{product.price}</td>
      <td className="py-2 px-4">{product.isActive ? 'Active' : 'InActive'}</td>
      <td className="py-2 px-4">In Stock</td>
      <td className="py-2 px-4 flex justify-around">
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
}
