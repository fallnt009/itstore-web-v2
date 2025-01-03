import useAdminOrder from '../../hooks/useAdminOrder';

import AdminOrderContent from './content/AdminOrderContent';

export default function AdminOrder() {
  const {
    orderOverview,
    page,
    dateFilters,
    handleChangePage,
    handleToggleFilters,
    handleChangeDate,
  } = useAdminOrder();

  //fetch error

  return (
    <main className="container pb-5">
      <header className="flex items-center  justify-between text-2xl font-semibold px-5 py-5">
        <h1>Order Lists</h1>
      </header>
      <article className="bg-white mx-5 px-5 rounded-xl">
        <section className="py-5">
          <AdminOrderContent
            orderLists={orderOverview}
            page={page}
            onChangePage={handleChangePage}
            onToggleFilters={handleToggleFilters}
            dates={dateFilters}
            onSubmitDate={handleChangeDate}
          />
        </section>
      </article>
    </main>
  );
}
