import SelectCategory from './select/SelectCategory';

export default function CategoryCreateTagForm({
  value,
  error,
  data,
  onChange,
  onSubmit,
}) {
  const {brands, category, subCategory} = data;
  const {brandId, categoryId, subCategoryId} = value;

  return (
    <div>
      <h1 className="font-semibold text-lg">Select Categories to Bound</h1>
      <div className="flex gap-5 pt-4">
        <SelectCategory
          name="brandId"
          title="Brand"
          data={brands}
          value={brandId}
          error={error.brandId}
          onChange={onChange}
        />

        <SelectCategory
          name="categoryId"
          title="Category"
          data={category}
          value={categoryId}
          error={error.categoryId}
          onChange={onChange}
        />
        <SelectCategory
          name="subCategoryId"
          title="Sub Category"
          data={subCategory}
          value={subCategoryId}
          error={error.subCategoryId}
          onChange={onChange}
        />
        <div className="block">
          <button
            type="button"
            className="p-2 px-4 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white"
            onClick={onSubmit}
          >
            <h1 className="font-semibold">Submit</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
