import useAdminOrder from '../../hooks/useAdminOrder';

import AdminOrderContent from './content/AdminOrderContent';

export default function AdminOrder() {
  const {orderOverview, page, handleChangePage} = useAdminOrder();
  //order need
  //orderOverview
  /// filter order ,pargination ,notification
  /// newest order upcoming ,and date filter

  //header Order Overview
  //nortification tab (number of unreview order and click to show)
  //view order / approve order and update information
  return (
    <main className="pb-5">
      <header className="flex items-center  justify-between text-2xl font-semibold px-5 py-5">
        <h1>Order Lists</h1>
      </header>
      <article className="bg-white mx-5 px-5 rounded-xl">
        <section className="py-5">
          <AdminOrderContent
            orderLists={orderOverview}
            page={page}
            onChangePage={handleChangePage}
          />
        </section>
      </article>
    </main>
  );
}
