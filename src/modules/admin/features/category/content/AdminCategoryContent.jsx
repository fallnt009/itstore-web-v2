import CategoryContentTable from './general/CategoryContentTable';
import TagContentTable from './tags/TagContentTable';

export default function AdminCategoryContent({selectedNavId, categoryData}) {
  return (
    <>
      {selectedNavId === 4 ? (
        <TagContentTable categoryData={categoryData} />
      ) : (
        <CategoryContentTable categoryData={categoryData} />
      )}
    </>
  );
}
