import {MdArrowBackIos} from 'react-icons/md';

import useAdminProductForm from '../../../hooks/useAdminProductForm';
import useCategoryTag from '../../../hooks/useCategoryTag';

import ProductForm from '../form/ProductForm';
import ProductTag from '../tag/ProductTag';
import ProductSettings from '../settings/ProductSettings';
import BackButton from '../../../components/ui/BackButton';

export default function AdminProductCreate() {
  const {
    formValues,
    formErrors,
    bcsId,
    selectedImage,
    handleChangeInput,
    handleSubmitForm,
    handleSelectBcsId,
    handleClickBack,
    handleSelectImage,
    handleToggleActiveProduct,
  } = useAdminProductForm();

  const {
    tagOverview,
    brandError,
    tagError,
    page,
    setSelectBrandId,
    setChangePage,
  } = useCategoryTag();

  return (
    <main className="px-5 py-5">
      <header className="flex items-center justify-between gap-5 px-5 pb-5">
        <div className="flex items-center gap-5">
          <BackButton onClick={handleClickBack} />
          <h1 className="text-2xl font-semibold">Create Product</h1>
        </div>
        <button
          type="button"
          className="p-2 px-4 border rounded-lg hover:bg-slate-100 hover:text-gray-700 bg-blue-100 text-blue-600 font-semibold"
          onClick={handleSubmitForm}
        >
          Save
        </button>
      </header>
      <article className="grid grid-cols-2 px-5 gap-5">
        <section>
          <ProductForm
            input={formValues}
            error={formErrors}
            selectedImage={selectedImage}
            onSelectImage={handleSelectImage}
            onChange={handleChangeInput}
          />
        </section>
        <section className="flex flex-col gap-5">
          <div className="bg-white p-5 rounded-xl">
            <h1 className="font-semibold text-xl">Category</h1>
            <ProductTag
              tag={tagOverview}
              page={page}
              error={formErrors}
              tagError={tagError}
              brandError={brandError}
              bcsId={bcsId}
              onSelectBrand={setSelectBrandId}
              onSelectTag={handleSelectBcsId}
              onChangePage={setChangePage}
            />
          </div>
          <div className="bg-white p-5 rounded-xl">
            <h1 className="font-semibold text-xl">Visibility</h1>
            <ProductSettings
              isActive={formValues.isActive}
              onToggleChange={handleToggleActiveProduct}
            />
          </div>
        </section>
      </article>
    </main>
  );
}
