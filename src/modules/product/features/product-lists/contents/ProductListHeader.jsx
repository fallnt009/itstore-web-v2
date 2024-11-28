export default function ProductListHeader({subCategorySlug, categorySlug}) {
  const subCategoryTitle = subCategorySlug.toUpperCase();
  const categoryTitle = categorySlug.toUpperCase();
  return (
    <header className="flex flex-col justify-start py-10 px-10 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-400 select-none">
      <h1 className="text-4xl font-semibold text-white">{subCategoryTitle}</h1>
      <p className="text-white">{categoryTitle}</p>
    </header>
  );
}
