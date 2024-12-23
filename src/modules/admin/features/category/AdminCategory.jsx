import useAdminCategory from '../../hooks/useAdminCategory';

import AdminCategoryContent from './content/AdminCategoryContent';
import AdminCategoryNavBar from './nav/AdminCategoryNavBar';

import ParginationIndicator from '../../../shared/components/ui/ParginationIndicator';
import ErrorPage from '../../../shared/features/error/ErrorPage';

export default function AdminCategory() {
  //header
  //selecttab (brand,category,subCategory and )
  //content (id,title,)
  //popup

  const {
    categoryOverview,
    page,
    selectedNavId,
    error,
    errorStatus,
    handleChangePage,
    handleSelectNavId,
  } = useAdminCategory();

  const {items, totalItems, totalPages} = categoryOverview;

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

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
      <section className="flex justify-end text-gray-500 text-sm pb-3 px-3">
        <p>found {totalItems || 0} items</p>
      </section>
      <section className="h-[370px] border rounded-xl">
        <AdminCategoryContent categoryData={items} />
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
