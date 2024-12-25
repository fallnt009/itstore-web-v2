export default function CategoryContentTable({categoryData}) {
  return (
    <table className="w-full table-auto border-collapse text-center rounded-xl">
      <thead className="font-normal text-gray-600 bg-slate-100">
        <tr>
          <th className="py-1 px-4">ID</th>
          <th className="py-1 px-4 ">Brand</th>
          <th className="py-1 px-4 ">Slug</th>
          <th className="py-1 px-4">Action</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {categoryData.length > 0 ? (
          categoryData.map((item) => (
            <tr className="border-t bg-white font-semibold" key={item.id}>
              <td className="py-1">{item.id}</td>
              <td className="py-1"> {item.title}</td>
              <td className="py-1"> {item.slug}</td>
              <td className="py-1"> actions</td>
            </tr>
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
