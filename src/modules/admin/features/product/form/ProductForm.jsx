import FormInput from '../../../components/FormInput';
import ProductFormSelect from './select/ProductFormSelect';
import ProductFormTable from './table/ProductFormTable';

import ParginationIndicator from '../../../../shared/components/ui/ParginationIndicator';

export default function ProductForm({input, error, onChange}) {
  //get input ,error ,handles

  //useProductForm ready handle change
  // useCategoryTag ready fetch allbrand ,fetchbcs ,setselectBrandId
  //make select Brand
  return (
    <form className="grid grid-cols-2 py-5 gap-5">
      <article className="flex flex-col gap-2">
        <section className="flex flex-col gap-2">
          <h1 className="font-semibold">Title</h1>
          <FormInput
            name="title"
            value={input.title}
            error={error.title}
            onChange={onChange}
          />
        </section>
        <section className="flex flex-col gap-2">
          <h1 className="font-semibold">Price</h1>
          <FormInput
            name="price"
            value={input.price}
            error={error.price}
            onChange={onChange}
          />
        </section>
        <section className="flex flex-col gap-2">
          <h1 className="font-semibold">Description</h1>
          <textarea
            className="border rounded-xl shadow-inner p-2 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            name="description"
            value={input.description}
            error={error.description}
            onChange={onChange}
          />
        </section>
        <section className="flex flex-col gap-2">
          <h1 className="font-semibold">Quantity</h1>
          <FormInput
            name="qtyInStock"
            value={input.qtyInStock}
            error={error.qtyInStock}
            onChange={onChange}
          />
        </section>
        <section className="flex pt-5 justify-end">
          <button className="p-2 px-4 border rounded-lg bg-slate-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 cursor-pointer font-semibold">
            Submit
          </button>
        </section>
      </article>
      <article className="flex flex-col gap-2">
        <section className="flex items-center justify-between gap-2">
          <ProductFormSelect />
        </section>
        <header>
          <h1 className="font-semibold">Select Tag</h1>
        </header>
        <section className="border rounded-xl bg-slate-100 overflow-auto">
          <ProductFormTable />
        </section>
        <section>
          <ParginationIndicator />
        </section>
      </article>
    </form>
  );
}
