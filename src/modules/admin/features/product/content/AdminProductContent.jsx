import ParginationIndicator from '../../../../shared/components/ui/ParginationIndicator';
import AdminProductTable from './table/AdminProductTable';

export default function AdminProductContent() {
  return (
    <main>
      <section className="border rounded-xl bg-slate-100">
        <AdminProductTable />
      </section>
      <section>
        <ParginationIndicator />
      </section>
    </main>
  );
}
