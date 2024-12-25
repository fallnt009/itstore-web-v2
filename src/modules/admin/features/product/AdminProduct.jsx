import useAdminProduct from '../../hooks/useAdminProduct';

import AdminProductNavBar from './nav/AdminProductNavBar';
import AdminProductContent from './content/AdminProductContent';
import SelectTabFilter from '../../components/SelectTabFilter';

import ErrorPage from '../../../shared/features/error/ErrorPage';

import Popup from '../../../shared/components/popup/Popup';
import DeletePopup from '../../../shared/components/popup/DeletePopup';
import usePopup from '../../hooks/usePopup';

export default function AdminProduct() {
  //Add/Edit/Delete product
  const {
    productOverview,
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
    submitDeleteProduct,
  } = useAdminProduct();

  const {isOpen, itemId, setOpenPopup, setClosePopup} = usePopup();

  const {items} = productOverview;
  //Organize productCategory
  //upload product by excel

  //select box/dropdown show active
  //search id,title,price
  //filter instock/outof ,status active/inactive ,price high/low

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <main className="bg-gray-50 pb-5 border-t shadow-inner">
      <header className="text-3xl font-semibold px-5 pt-5">
        <h1>Products </h1>
      </header>
      <nav className="flex justify-end gap-5 pb-5 px-5">
        <AdminProductNavBar />
      </nav>
      <article className="bg-white px-5 mx-5 rounded-xl">
        <section className="pt-5 ">
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
            onOpenPopup={setOpenPopup}
          />
        </section>
      </article>
      <Popup isOpen={isOpen} onClose={setClosePopup}>
        <DeletePopup
          onSubmit={submitDeleteProduct}
          onClose={setClosePopup}
          id={itemId}
        />
      </Popup>
    </main>
  );
}
