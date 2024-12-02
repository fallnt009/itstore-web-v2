export default function AdminProductTableItem() {
  return (
    <tr className="bg-white border-b">
      <td className="py-2 px-4">1</td>
      <td className="py-2 px-4 flex justify-start line-clamp-1">
        A Very Long Product Title That Should Be Truncated
      </td>
      <td className="py-2 px-4">$10.00</td>
      <td className="py-2 px-4">Active</td>
      <td className="py-2 px-4">In Stock</td>
      <td className="py-2 px-4 flex justify-around">
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
}
