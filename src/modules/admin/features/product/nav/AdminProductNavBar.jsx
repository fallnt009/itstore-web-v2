export default function AdminProductNavBar() {
  return (
    <ul className="flex gap-2 font-semibold">
      <li className="p-2 border rounded-lg bg-slate-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 cursor-pointer">
        Add Product
      </li>
      <li className="p-2 border rounded-lg bg-slate-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 cursor-pointer">
        Add Category
      </li>
    </ul>
  );
}
