import useAdminProduct from '../../hooks/useAdminProduct';

import AdminProductContent from './content/AdminProductContent';
import SelectTabFilter from '../../components/SelectTabFilter';

import ErrorPage from '../../../shared/features/error/ErrorPage';

import Popup from '../../../shared/components/popup/Popup';
import DeletePopup from '../../../shared/components/popup/DeletePopup';
import usePopup from '../../hooks/usePopup';
import AddButton from '../../components/ui/AddButton';

import {ADMIN_PRODUCT_CREATE} from '../../../shared/services/config/routing';

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
    <main className="pb-5">
      <header className="flex items-center  justify-between text-2xl font-semibold px-5 py-5">
        <h1>Product Lists</h1>
        <AddButton title="Add Product" path={ADMIN_PRODUCT_CREATE} />
      </header>
      <article className="bg-white mx-5 px-5 rounded-xl">
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
