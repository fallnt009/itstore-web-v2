import OrderContentFilters from './filters/OrderContentFilters';
import AdminOrderContentTab from './tab/AdminOrderContentTab';
import OrderContentTable from './table/OrderContentTable';

import ParginationIndicator from '../../../../shared/components/ui/ParginationIndicator';
import DatePicker from '../../../components/date/DatePicker';

export default function AdminOrderContent({
  orderLists,
  page,
  dates,
  onChangePage,
  onToggleFilters,
  onSubmitDate,
}) {
  const {items, totalPages} = orderLists;
  return (
    <main className="container">
      <section className="flex pb-5">
        <DatePicker dates={dates} onSubmit={onSubmitDate} />
      </section>
      <section className="flex items-center justify-between">
        <AdminOrderContentTab onToggle={onToggleFilters} />
        <OrderContentFilters />
      </section>
      <section className="py-5">
        <div className="overflow-auto rounded-lg shadow">
          <OrderContentTable items={items} />
        </div>
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
