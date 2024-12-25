import {MdAdd} from 'react-icons/md';

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
    navigateTo,
  } = useAdminCategory();

  const {items, totalItems, totalPages} = categoryOverview;

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }
  //tags
  //filters (category,brand,subCategory)
  //all data with pagination

  return (
    <main className="bg-gray-50 pb-5 border-t shadow-inner">
      <header className="text-3xl font-semibold px-5 py-5">
        <h1>Categories</h1>
      </header>
      <ul className="flex justify-end gap-2 font-semibold pb-5 px-5">
        <li
          className="flex items-center gap-2 p-2 border rounded-lg hover:bg-white bg-blue-100 text-blue-600 cursor-pointer"
          onClick={() => navigateTo('create')}
        >
          <span>
            <MdAdd />
          </span>
          Create Category
        </li>
      </ul>
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
