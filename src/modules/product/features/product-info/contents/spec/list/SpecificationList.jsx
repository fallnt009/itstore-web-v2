import SpecificationListItem from './item/SpecificationListItem';

export default function SpecificationList({title, text}) {
  return (
    <div className="mt-5">
      {title?.map((item, index) => (
        <div
          className={`flex flex-col gap-2 py-3 px-2 text-gray-600 ${
            index % 2 === 0 ? 'bg-gray-100 bg-opacity-70' : 'bg-white'
          }`}
          key={item.id}
        >
          <div className="grid grid-cols-[2fr_7fr] gap-5">
            <h4 className="flex items-center text-base font-semibold text-gray-800">
              {item.title}
            </h4>
            <div className="flex flex-col gap-1 text-base">
              {text
                ?.filter(
                  (detail) =>
                    detail.SpecProduct.specSubcategoryId ===
                    item.SpecSubcategory.id
                )
                .map((filtered) => (
                  <SpecificationListItem key={filtered.id} item={filtered} />
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
