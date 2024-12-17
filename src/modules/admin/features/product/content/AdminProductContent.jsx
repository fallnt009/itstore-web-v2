import ParginationIndicator from '../../../../shared/components/ui/ParginationIndicator';
import AdminProductTable from './table/AdminProductTable';

export default function AdminProductContent({
  items,
  page,
  totalPages,
  onChangePage,
  onOpenPopup,
}) {
  return (
    <main>
      <section className="border rounded-xl bg-slate-100 overflow-auto">
        <AdminProductTable items={items} onOpenPopup={onOpenPopup} />
      </section>
      <section className="flex pt-5 justify-end">
        <ParginationIndicator
          page={page}
          totalPages={totalPages}
          handleChange={onChangePage}
        />
      </section>
    </main>
  );
}
