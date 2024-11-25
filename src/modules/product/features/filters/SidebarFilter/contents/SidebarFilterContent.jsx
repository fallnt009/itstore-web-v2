import {useState} from 'react';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';

import SidebarFilterContentItem from './SidebarFilterContentItem';

export default function SidebarFilterContent({
  specItems,
  specProduct,
  filters = [],
  onSelect,
}) {
  const [isExpand, setIsExpand] = useState({});

  const toggleExpand = (id) => {
    setIsExpand((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="overflow-y-auto">
      {specItems?.map((item) => (
        <div
          className="flex flex-col py-3 border-b text-gray-600"
          key={item.id}
        >
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => toggleExpand(item.id)}
          >
            <h1 className="font-semibold text-gray-800 text-base select-none">
              {item.title}
            </h1>
            <span>
              {isExpand[item.id] ? (
                <MdKeyboardArrowUp size={30} />
              ) : (
                <MdKeyboardArrowDown size={30} />
              )}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out  ${
              isExpand[item.id] ? 'max-h-[500px] overflow-y-auto' : 'max-h-0'
            }`}
          >
            {specProduct
              ?.filter(
                (detail) => detail.SpecSubcategory.SpecItem.id === item.id
              )
              .map((filtered) => (
                <SidebarFilterContentItem
                  key={filtered.id}
                  item={filtered}
                  isChecked={filters.some((f) => f.id === filtered.id)}
                  onSelect={onSelect}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
