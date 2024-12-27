import CategoryCreateForm from './form/CategoryCreateForm';
import CategoryCreateTagForm from './form/CategoryCreateTagForm';
import CategoryCreateMenu from './menu/CategoryCreateMenu';

import useAdminCategoryForm from '../../../hooks/useAdminCategoryForm';

import BackButton from '../../../components/ui/BackButton';

export default function AdminCategoryCreate() {
  //create general category need only title
  //create tags
  //need brandId,categoryId and subCategoryId
  const {
    formValues,
    formErrors,
    tagValues,
    tagError,
    selectedMenu,
    categoryFilters,
    handleChangeInput,
    handleSelectTag,
    handleSubmitCategory,
    handleSubmitCategoryTag,
    handleSelectMenu,
    navigateBack,
  } = useAdminCategoryForm();

  return (
    <main className="pb-5">
      <header className="flex items-center gap-5 text-2xl font-semibold px-5 py-5">
        <BackButton onClick={navigateBack} />
        <h1>Create Categories</h1>
      </header>
      <article className="bg-white rounded-xl m-5 p-5">
        <h1 className="font-semibold text-lg">Select Category</h1>
        <CategoryCreateMenu
          selected={selectedMenu}
          onClick={handleSelectMenu}
        />
      </article>
      <article className="bg-white rounded-xl m-5 p-5">
        {selectedMenu === 4 ? (
          <CategoryCreateTagForm
            value={tagValues}
            error={tagError}
            data={categoryFilters}
            onChange={handleSelectTag}
            onSubmit={handleSubmitCategoryTag}
          />
        ) : (
          <CategoryCreateForm
            value={formValues}
            error={formErrors}
            onChange={handleChangeInput}
            onSubmit={handleSubmitCategory}
          />
        )}
      </article>
    </main>
  );
}
