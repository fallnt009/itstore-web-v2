import FormInput from '../../../components/FormInput';

import MultiUploader from '../../../../shared/components/upload/MultiUploader';

export default function ProductForm({
  input,
  error,
  selectedImage,
  onChange,
  onSubmit,
  onSelectImage,
}) {
  return (
    <form className="py-5 gap-5" method="post" onSubmit={onSubmit}>
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
            type="number"
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
            type="number"
            value={input.qtyInStock}
            error={error.qtyInStock}
            onChange={onChange}
          />
        </section>
        <section className="flex flex-col gap-5 pt-2 w-full">
          <h1 className="font-semibold">Product Images</h1>
          <MultiUploader select={selectedImage} setSelect={onSelectImage} />
        </section>
        <section className="flex pt-5 justify-end">
          <button
            type="submit"
            className="p-2 px-4 border rounded-lg bg-slate-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 cursor-pointer font-semibold"
          >
            Submit
          </button>
        </section>
      </article>
    </form>
  );
}
