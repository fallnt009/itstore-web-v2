import {MdArrowBackIos} from 'react-icons/md';

import useAdminProductForm from '../../../hooks/useAdminProductForm';
import useCategoryTag from '../../../hooks/useCategoryTag';

import ProductForm from '../form/ProductForm';
import ProductTag from '../tag/ProductTag';

import ErrorPage from '../../../../shared/features/error/ErrorPage';

export default function AdminProductCreate() {
  const {
    formValues,
    formErrors,
    bcsId,
    handleChangeInput,
    handleSubmitForm,
    handleSelectBcsId,
    handleClickBack,
  } = useAdminProductForm();

  const {
    tagOverview,
    error,
    errorStatus,
    tagError,
    page,
    setSelectBrandId,
    setChangePage,
  } = useCategoryTag();

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <main>
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
        <h1 className="text-2xl font-semibold">Create Product</h1>
      </header>
      <article className="grid grid-cols-2 px-5 gap-5">
        <ProductForm
          input={formValues}
          error={formErrors}
          onChange={handleChangeInput}
          onSubmit={handleSubmitForm}
        />
        <ProductTag
          tag={tagOverview}
          page={page}
          error={formErrors}
          tagError={tagError}
          bcsId={bcsId}
          onSelectBrand={setSelectBrandId}
          onSelectTag={handleSelectBcsId}
          onChangePage={setChangePage}
        />
      </article>
    </main>
  );
}
