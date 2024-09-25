import SpecContentListItem from './SpecContentListItem';

export default function SpecContentList({title, text}) {
  return (
    <div>
      <div className="grid grid-cols-[2fr_7fr] gap-2 bg-gray-200 p-2 rounded-lg text-gray-600 font-semibold">
        <h1>Title</h1>
        <h1>Description</h1>
      </div>
      {title?.map((item) => (
        <div
          className="flex flex-col gap-2 py-5 px-2 border-b text-gray-600"
          key={item.id}
        >
          <div className="grid grid-cols-[2fr_7fr] gap-2">
            <h4 className="flex items-center text-base font-semibold">
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
                  <SpecContentListItem key={filtered.id} item={filtered} />
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
