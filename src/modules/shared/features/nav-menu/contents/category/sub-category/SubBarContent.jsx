import SubBarContentItem from './SubBarContentItem';

export default function SubBarContent({lists, selectedMenuId, onClose}) {
  const categoryObj = lists.find((item) => item.id === selectedMenuId);
  if (!categoryObj) return null;

  return (
    <div className=" rounded-lg p-4 bg-white">
      <div className="pb-4 text-xl font-semibold">{categoryObj.title}</div>
      <div className="grid grid-cols-4 gap-4">
        {lists
          ?.filter((filter) => filter.id === selectedMenuId)
          .flatMap((item) =>
            item.subCategory.map((sub) => (
              <SubBarContentItem
                key={sub.id}
                item={sub}
                src={sub.src}
                onClose={onClose}
              />
            ))
          )}
      </div>
    </div>
  );
}
