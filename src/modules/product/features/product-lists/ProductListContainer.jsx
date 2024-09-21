import {useState, useEffect, useCallback} from 'react';
import {useParams} from 'react-router-dom';

export default function ProductListContainer() {
  const {categorySlug, subCategorySlug} = useParams();
  // const {categoryItem, totalItems, totalPages, fetchCategoryItem} =
  //   useCategory();

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  //Selected
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);

  // const loadCategory = useCallback(async () => {
  //   setLoading(true);
  //   try {
  //     //
  //     // await fetchCategoryItem(
  //     //   categorySlug,
  //     //   subCategorySlug,
  //     //   page,
  //     //   12,
  //     //   search,
  //     //   filters
  //     // );
  //   } catch (err) {
  //     setLoading(false);
  //   } finally {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   }
  // }, [categorySlug, subCategorySlug, fetchCategoryItem, page, search, filters]);

  // useEffect(() => {
  //   loadCategory();
  // }, [loadCategory]);

  // const handleSubmitFilter = (newFilters, newSearch) => {
  //   setFilters(newFilters);
  //   setSearch(newSearch);
  //   setPage(1);
  // };

  // const handleChangePage = (newPage) => {
  //   setPage(newPage);
  // };

  return (
    <div className="px-10">
      <div>
        {/* <CategoryContent
          product={categoryItem}
          totalItems={totalItems}
          loading={loading}
          onSubmit={handleSubmitFilter}
          setFilters={setFilters}
          setSearch={setSearch}
        /> */}
      </div>
      <div className="flex justify-center gap-2 py-3">
        {/* <ParginationButton
          page={page}
          totalPages={totalPages}
          handleChange={handleChangePage}
        /> */}
      </div>
    </div>
  );
}
