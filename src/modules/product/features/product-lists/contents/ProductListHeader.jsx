export default function ProductListHeader({subCategorySlug, totalItems}) {
  const subCategoryTitle = subCategorySlug.toUpperCase();

  return (
    <div className="text-black my-5">
      <div className="flex items-center gap-2">
        <p className="text-2xl font-bold">{subCategoryTitle}</p>
      </div>
      <div className="flex items-center text-xs">
        <p>Total Items : {totalItems}</p>
      </div>
    </div>
  );
}
