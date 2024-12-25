import CategoryCreateForm from './form/CategoryCreateForm';
import CategoryCreateTagForm from './form/CategoryCreateTagForm';
import CategoryCreateMenu from './menu/CategoryCreateMenu';

export default function AdminCategoryCreate() {
  //create general category need only title
  //create tags
  //need brandId,categoryId and subCategoryId
  return (
    <main className="bg-gray-50 pb-5 border-t shadow-inner">
      <header className="text-3xl font-semibold px-5 py-5">
        <h1>Create Categories</h1>
      </header>
      <article className="bg-white rounded-xl m-5 p-5">
        <h1 className="font-semibold text-lg">Select Category</h1>
        <CategoryCreateMenu />
      </article>
      <article className="bg-white rounded-xl m-5 p-5">
        <CategoryCreateForm />
      </article>
      <article className="bg-white rounded-xl m-5 p-5">
        <CategoryCreateTagForm />
      </article>
    </main>
  );
}
