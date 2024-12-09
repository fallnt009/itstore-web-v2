export default function ProductFormTableItem({tag, selectedId, onSelectTag}) {
  const {id, BrandCategory, SubCategory} = tag;

  return (
    <tr className="bg-white border-b">
      <td className="py-2 px-4">{id || ''}</td>
      <td className="py-2 px-4">{BrandCategory.Brand.title || ''}</td>
      <td className="py-2 px-4">{SubCategory.title || ''}</td>
      <td className="py-2 px-4 flex justify-around">
        <button
          type="button"
          className={`flex justify-center p-1 px-4 w-16 text-xs font-semibold rounded-xl text-gray-500 hover:bg-indigo-600 hover:text-white ${
            selectedId === id ? 'bg-indigo-600 text-white' : 'bg-slate-100'
          } `}
          onClick={() => onSelectTag(id)}
          disabled={selectedId === id}
        >
          {selectedId === id ? 'Selected' : 'Add'}
        </button>
      </td>
    </tr>
  );
}
