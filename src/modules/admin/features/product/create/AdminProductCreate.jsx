import useAdminProductForm from '../../../hooks/useAdminProductForm';

import ProductForm from '../../../components/ProductForm';

export default function AdminProductCreate() {
  //

  const {formValues, formErrors, handleChangeInput, handleSubmitForm} =
    useAdminProductForm();
  return (
    <main>
      <header>
        <i></i>
        <h1 className="text-2xl font-semibold">Create Product</h1>
      </header>
      <section>
        <ProductForm
          input={formValues}
          error={formErrors}
          onChange={handleChangeInput}
        />
      </section>
    </main>
  );
}
