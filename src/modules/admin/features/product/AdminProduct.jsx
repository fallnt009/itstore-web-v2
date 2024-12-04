import useAdminProduct from '../../hooks/useAdminProduct';

import AdminProductNavBar from './nav/AdminProductNavBar';
import AdminProductContent from './content/AdminProductContent';
import SelectTabFilter from '../../components/SelectTabFilter';

import ErrorPage from '../../../shared/features/error/ErrorPage';

export default function AdminProduct() {
  //Add/Edit/Delete product
  const {
    ProductOverview,
    error,
    errorStatus,
    page,
    totalPages,
    sorts,
    filters,
    submitChangePage,
    setSortOrder,
    setChangeFilters,
    setSubmitSearch,
    setClearAll,
  } = useAdminProduct();

  const {items} = ProductOverview;
  //Organize productCategory
  //upload product by excel

  //select box/dropdown show active
  //search id,title,price
  //filter instock/outof ,status active/inactive ,price high/low

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <main>
      <header className="text-2xl font-semibold">
        <h1>Product Overview</h1>
      </header>
      <nav className="flex gap-5 pt-5 py-2">
        <AdminProductNavBar />
      </nav>
      <section className="pt-5">
        <SelectTabFilter
          sorts={sorts}
          filters={filters}
          onChangeSort={setSortOrder}
          onChangeFilter={setChangeFilters}
          onChangeSearch={setSubmitSearch}
          onClear={setClearAll}
        />
      </section>
      <section className="py-5">
        <AdminProductContent
          items={items}
          page={page}
          totalPages={totalPages}
          onChangePage={submitChangePage}
        />
      </section>
    </main>
  );
}
