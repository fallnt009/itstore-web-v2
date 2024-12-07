import {MdArrowBackIos} from 'react-icons/md';

import useAdminProductForm from '../../../hooks/useAdminProductForm';

import ProductForm from '../form/ProductForm';

export default function AdminProductCreate() {
  //

  const {formValues, formErrors, handleChangeInput, handleSubmitForm} =
    useAdminProductForm();
  return (
    <main>
      <header className="flex items-center gap-5">
        <button className="flex items-center p-2 border rounded-lg bg-slate-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600">
          <i>
            <MdArrowBackIos size={20} />
          </i>
          <h2>Back</h2>
        </button>
        <h1 className="text-2xl font-semibold">Create Product</h1>
      </header>
      <section className="px-5">
        <ProductForm
          input={formValues}
          error={formErrors}
          onChange={handleChangeInput}
        />
      </section>
    </main>
  );
}
