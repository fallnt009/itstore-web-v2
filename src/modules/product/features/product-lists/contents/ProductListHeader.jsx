export default function ProductListHeader({
  categorySlug,
  subCategorySlug,
  totalItems,
}) {
  const categoryTitle = categorySlug.toUpperCase();
  const subCategoryTitle = subCategorySlug.toUpperCase();

  return (
    <div className="py-5 border-b text-indigo-700">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl  font-semibold ">{categoryTitle}</h1>
        <span>-</span>
        <p className="text-2xl">{subCategoryTitle}</p>
      </div>
      <div className="flex items-center text-base">
        <p>Total Items : {totalItems}</p>
      </div>
    </div>
  );
}
