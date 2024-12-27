import FormInput from '../../../components/FormInput';

import MultiUploader from '../../../../shared/components/upload/MultiUploader';

export default function ProductForm({
  input,
  error,
  selectedImage,
  onChange,
  onSelectImage,
}) {
  return (
    <form className="flex flex-col gap-5" method="post">
      <article className="flex flex-col gap-1 bg-white rounded-xl p-5">
        <h1 className="font-semibold text-xl pb-4">Basic Information</h1>
        <section className="flex flex-col gap-2">
          <h1>Product Name</h1>
          <FormInput
            name="title"
            value={input.title}
            error={error.title}
            onChange={onChange}
          />
        </section>
        <section className="flex flex-col gap-2">
          <h1>Price</h1>
          <FormInput
            name="price"
            type="number"
            value={input.price}
            error={error.price}
            onChange={onChange}
          />
        </section>
        <section className="flex flex-col gap-2">
          <h1>Description</h1>
          <textarea
            className="border rounded-xl shadow-inner p-2 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            name="description"
            value={input.description}
            error={error.description}
            onChange={onChange}
          />
        </section>
        <section className="flex flex-col gap-2">
          <h1>Quantity</h1>
          <FormInput
            name="qtyInStock"
            type="number"
            value={input.qtyInStock}
            error={error.qtyInStock}
            onChange={onChange}
          />
        </section>
      </article>
      <article className="flex flex-col bg-white rounded-xl p-5">
        <section className="flex flex-col gap-5 w-full">
          <h1 className="font-semibold text-xl">Product Images</h1>
          <MultiUploader select={selectedImage} setSelect={onSelectImage} />
        </section>
      </article>
    </form>
  );
}
