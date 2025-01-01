import OrderContentFilters from './filters/OrderContentFilters';
import AdminOrderContentTab from './tab/AdminOrderContentTab';
import OrderContentTable from './table/OrderContentTable';

import ParginationIndicator from '../../../../shared/components/ui/ParginationIndicator';

export default function AdminOrderContent({orderLists, page, onChangePage}) {
  const {items, totalPages} = orderLists;
  return (
    <main className="">
      <section className="flex items-center justify-between">
        <AdminOrderContentTab />
        <OrderContentFilters />
      </section>
      <section className="py-5">
        <OrderContentTable items={items} />
      </section>
      <section className="flex justify-end">
        <ParginationIndicator
          page={page}
          totalPages={totalPages}
          handleChange={onChangePage}
        />
      </section>
    </main>
  );
}
