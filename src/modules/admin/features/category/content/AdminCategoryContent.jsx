import CategoryContentTable from './general/CategoryContentTable';
import TagContentTable from './tags/TagContentTable';

export default function AdminCategoryContent({selectedNavId, categoryData}) {
  return (
    <div className="border rounded-xl">
      {selectedNavId === 4 ? (
        <TagContentTable categoryData={categoryData} />
      ) : (
        <CategoryContentTable categoryData={categoryData} />
      )}
    </div>
  );
}
