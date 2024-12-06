import FormInput from './FormInput';

export default function ProductForm({input, error, onChange}) {
  //get input ,error ,handles
  return (
    <main className="w-1/2 py-5">
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
    </main>
  );
}
