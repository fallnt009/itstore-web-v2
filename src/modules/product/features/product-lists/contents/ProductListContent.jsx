export default function ProductListContent() {
  // const {categorySlug, subCategorySlug} = useParams();
  // const {specItems, specProduct, fetchProductFilter} = useProduct();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const titles = categoryFilter(subCategorySlug);
  //       //call fetch
  //       await fetchProductFilter(subCategorySlug, titles);
  //     } catch (err) {
  //       //err
  //     }
  //   };
  //   fetchData();
  // }, [fetchProductFilter, subCategorySlug]);

  return (
    <div>
      {/* <CategoryHeader
    categorySlug={categorySlug}
    subCategorySlug={subCategorySlug}
    totalItems={totalItems}
  />
  <ActiveFilterContent />
  <div className="grid grid-cols-[1fr_5fr]">
    <div>
      <SidebarFilter
        specItems={specItems}
        specProduct={specProduct}
        onSubmit={onSubmit}
        setFilters={setFilters}
        setSearch={setSearch}
      />
    </div>
    <div>
      <CategoryProductItem product={product} loading={loading} />
    </div>
  </div> */}
    </div>
  );
}
