import AdminProductNavBar from './nav/AdminProductNavBar';
import AdminProductContent from './content/AdminProductContent';
import SearchInput from '../../components/SearchInput';
import SelectTabFilter from '../../components/SelectTabFilter';

export default function AdminProduct() {
  //Add/Edit/Delete product
  //Organize productCategory
  //upload product by excel

  //select box/dropdown show active
  //search id,title,price
  //filter instock/outof ,status active/inactive ,price high/low
  return (
    <main>
      <header className="text-2xl font-semibold">
        <h1>Product Overview</h1>
      </header>
      <nav className="flex gap-5 pt-5 py-2">
        <AdminProductNavBar />
        <SearchInput />
      </nav>
      <section>
        <SelectTabFilter />
      </section>
      <section className="py-5">
        <AdminProductContent />
      </section>
    </main>
  );
}
