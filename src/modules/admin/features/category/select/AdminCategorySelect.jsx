export default function AdminCategorySelect({
  selectedFilters,
  categoryFilters,
  onChange,
  onClear,
}) {
  const {brands, category, subCategory} = categoryFilters;

  return (
    <div className="flex gap-5">
      <select
        className="p-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500  bg-slate-100 font-semibold cursor-pointer"
        onChange={(e) => onChange(e.target.name, e.target.value)}
        value={selectedFilters.brandSlug || ''}
        name="brandSlug"
      >
        <option value="" disabled>
          Choose Brand
        </option>
        {brands.length > 0 ? (
          brands.map((item) => (
            <option key={item.id} value={item.slug}>
              {item.title}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No Data available
          </option>
        )}
      </select>
      <select
        className="p-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500  bg-slate-100 font-semibold cursor-pointer"
        onChange={(e) => onChange(e.target.name, e.target.value)}
        value={selectedFilters.categorySlug || ''}
        name="categorySlug"
      >
        <option value="" disabled>
          Choose Category
        </option>
        {category.length > 0 ? (
          category.map((item) => (
            <option key={item.id} value={item.slug}>
              {item.title}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No Data available
          </option>
        )}
      </select>
      <select
        className="p-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500  bg-slate-100 font-semibold cursor-pointer"
        onChange={(e) => onChange(e.target.name, e.target.value)}
        value={selectedFilters.subCategorySlug || ''}
        name="subCategorySlug"
      >
        <option value="" disabled>
          Choose Sub Category
        </option>
        {subCategory.length > 0 ? (
          subCategory.map((item) => (
            <option key={item.id} value={item.slug}>
              {item.title}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No Data available
          </option>
        )}
      </select>
      <button
        type="button"
        className="font-semibold text-blue-600 hover:text-gray-500"
        onClick={onClear}
      >
        Clear All
      </button>
    </div>
  );
}
