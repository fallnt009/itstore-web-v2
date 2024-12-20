import AdminCategoryNavBar from './nav/AdminCategoryNavBar';

export default function AdminCategory() {
  //header
  //selecttab (brand,category,subCategory and )
  //content (id,title,)
  //popup
  return (
    <main>
      <header className="text-2xl font-semibold">
        <h1>Category Overview</h1>
      </header>
      <nav className="flex gap-5 pt-5 py-2">
        <AdminCategoryNavBar />
      </nav>
      <section>Content</section>
    </main>
  );
}
