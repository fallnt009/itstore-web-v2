import {MdArrowBackIos} from 'react-icons/md';

import useAdminProductForm from '../../../hooks/useAdminProductForm';
import useCategoryTag from '../../../hooks/useCategoryTag';

import ProductForm from '../form/ProductForm';
import ProductTag from '../tag/ProductTag';

import ErrorPage from '../../../../shared/features/error/ErrorPage';
import ProductSettings from '../settings/ProductSettings';

export default function AdminProductEdit() {
  const {
    formValues,
    formErrors,
    bcsId,
    brandId,
    selectedImage,
    error,
    errorStatus,
    handleChangeInput,
    handleSubmitForm,
    handleSelectBcsId,
    handleClickBack,
    handleSelectImage,
    handleToggleActiveProduct,
  } = useAdminProductForm();

  const {
    tagOverview,
    tagError,
    brandError,
    page,
    selectedBrandId,
    setSelectBrandId,
    setChangePage,
  } = useCategoryTag(brandId);

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <main className="mx-5">
      <header className="flex items-center gap-5">
        <button
          type="button"
          className="flex items-center p-2 border rounded-lg bg-slate-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
          onClick={handleClickBack}
        >
          <i>
            <MdArrowBackIos size={20} />
          </i>
          <h2>Back</h2>
        </button>
        <h1 className="text-2xl font-semibold">Edit Product</h1>
      </header>
      <article className="grid grid-cols-2 px-5 gap-5">
        <ProductForm
          input={formValues}
          error={formErrors}
          selectedImage={selectedImage}
          onSelectImage={handleSelectImage}
          onChange={handleChangeInput}
          onSubmit={handleSubmitForm}
        />
        <section>
          <ProductTag
            tag={tagOverview}
            page={page}
            error={formErrors}
            selectedBrand={selectedBrandId}
            tagError={tagError}
            brandError={brandError}
            bcsId={bcsId}
            onSelectBrand={setSelectBrandId}
            onSelectTag={handleSelectBcsId}
            onChangePage={setChangePage}
          />
          <ProductSettings
            isActive={formValues.isActive}
            onToggleChange={handleToggleActiveProduct}
          />
        </section>
      </article>
    </main>
  );
}
