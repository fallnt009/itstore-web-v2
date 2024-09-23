import SidebarFilterContentItem from './SidebarFilterContentItem';

export default function SidebarFilterContent({
  specItems,
  specProduct,
  filters = [],
  onSelect,
}) {
  console.log(specItems);
  console.log(specProduct);

  return (
    <>
      {specItems?.map((item) => (
        <div
          className="flex flex-col gap-3 py-5 border-b text-gray-600"
          key={item.id}
        >
          <h1 className="font-semibold text-gray-700 text-xl">{item.title}</h1>
          {specProduct
            ?.filter((detail) => detail.SpecSubcategory.SpecItem.id === item.id)
            .map((filtered) => (
              <SidebarFilterContentItem
                key={filtered.id}
                item={filtered}
                isChecked={filters.some((f) => f.id === filtered.id)}
                onSelect={onSelect}
              />
            ))}
        </div>
      ))}
    </>
  );
}
