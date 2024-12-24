import useAdminCategory from '../../hooks/useAdminCategory';

import AdminCategoryContent from './content/AdminCategoryContent';
import AdminCategoryNavBar from './nav/AdminCategoryNavBar';
import AdminCategorySelect from './select/AdminCategorySelect';

import ParginationIndicator from '../../../shared/components/ui/ParginationIndicator';
import ErrorPage from '../../../shared/features/error/ErrorPage';

export default function AdminCategory() {
  //header
  //selecttab (brand,category,subCategory and )
  //content (id,title,)
  //popup

  const {
    categoryOverview,
    categoryFilters,
    page,
    selectedNavId,
    error,
    errorStatus,
    filters,
    handleChangePage,
    handleSelectNavId,
    handleSetFilter,
    handleClearAllFilter,
  } = useAdminCategory();

  const {items, totalItems, totalPages} = categoryOverview;

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }
  //tags
  //filters (category,brand,subCategory)
  //all data with pagination

  return (
    <main>
      <header className="text-2xl font-semibold">
        <h1>Category Overview</h1>
      </header>
      <nav className="flex gap-5 pt-5 py-2">
        <AdminCategoryNavBar
          selectedNavId={selectedNavId}
          onSelect={handleSelectNavId}
        />
      </nav>
      <article
        className={`flex items-center mb-5 ${
          selectedNavId === 4 ? 'justify-between' : 'justify-end'
        }`}
      >
        {selectedNavId === 4 ? (
          <section>
            <AdminCategorySelect
              selectedFilters={filters}
              categoryFilters={categoryFilters}
              onChange={handleSetFilter}
              onClear={handleClearAllFilter}
            />
          </section>
        ) : (
          <></>
        )}
        <section className="flex text-gray-500 text-sm">
          <p>found {totalItems || 0} items</p>
        </section>
      </article>
      <section className="h-[370px] border rounded-xl">
        <AdminCategoryContent
          selectedNavId={selectedNavId}
          categoryData={items}
        />
      </section>
      <section className="flex py-5 justify-center">
        <ParginationIndicator
          page={page}
          totalPages={totalPages}
          handleChange={handleChangePage}
        />
      </section>
    </main>
  );
}
