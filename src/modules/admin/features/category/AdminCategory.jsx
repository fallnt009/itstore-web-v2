import useAdminCategory from '../../hooks/useAdminCategory';

import AdminCategoryContent from './content/AdminCategoryContent';
import AdminCategoryNavBar from './nav/AdminCategoryNavBar';
import AdminCategorySelect from './select/AdminCategorySelect';

import ParginationIndicator from '../../../shared/components/ui/ParginationIndicator';
import ErrorPage from '../../../shared/features/error/ErrorPage';
import AddButton from '../../components/ui/AddButton';

import {ADMIN_CATEGORY_CREATE} from '../../../shared/services/config/routing';

export default function AdminCategory() {
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

  return (
    <main className="pb-5">
      <header className="flex items-center  justify-between text-2xl font-semibold px-5 py-5">
        <h1>Categories</h1>
        <AddButton title="Add Category" path={ADMIN_CATEGORY_CREATE} />
      </header>
      <nav className="flex gap-5 pt-5 py-2 px-5 mx-5 bg-white">
        <AdminCategoryNavBar
          selectedNavId={selectedNavId}
          onSelect={handleSelectNavId}
        />
      </nav>
      <article
        className={`flex items-center px-5 mx-5 bg-white ${
          selectedNavId === 4 ? 'justify-between' : 'justify-end'
        }`}
      >
        {selectedNavId === 4 ? (
          <section className="pb-5">
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
        <section className="flex text-gray-500 text-sm pb-5">
          <p>found {totalItems || 0} items</p>
        </section>
      </article>
      <article className="mx-5 px-5 bg-white">
        <section>
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
      </article>
    </main>
  );
}
