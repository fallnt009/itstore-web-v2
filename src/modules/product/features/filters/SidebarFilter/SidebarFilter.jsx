import {useState} from 'react';
import {MdClose} from 'react-icons/md';

import SidebarFilterContent from './contents/SidebarFilterContent';

export default function SidebarFilter({
  specItems,
  specProduct,
  onSubmit,
  onClear,
  onCloseDrawer,
}) {
  const [selectedFilter, setSelectedFilter] = useState([]);

  const handleOnSelectFilter = (item, isChecked) => {
    setSelectedFilter((prevFilter) => {
      if (isChecked) {
        //pack
        if (!prevFilter.some((filter) => filter.id === item.id)) {
          return [...prevFilter, item];
        }
      } else {
        //removing one by one
        return prevFilter.filter((filter) => filter.id !== item.id);
      }

      return prevFilter;
    });
  };

  const handleClearAllFilter = () => {
    setSelectedFilter([]);
    onClear(); //clear filter
  };

  const handleSubmitFilter = () => {
    onSubmit(selectedFilter);
    onCloseDrawer();
  };

  return (
    <div className="box-border mx-5 pt-5 grid grid-rows-[auto,1fr,auto] h-screen">
      <div className="flex gap-x-24 justify-start items-center font-semibold pb-5 border-b ">
        <button
          className="hover:bg-gray-100 p-3 rounded-full"
          onClick={onCloseDrawer}
        >
          <MdClose size={20} />
        </button>
        <h1 className="text-xl">All Filter</h1>
      </div>
      <div className="flex-1 overflow-y-auto">
        <SidebarFilterContent
          specItems={specItems}
          specProduct={specProduct}
          filters={selectedFilter}
          onSelect={handleOnSelectFilter}
        />
      </div>
      <div className="grid grid-cols-2 pt-5 gap-3 border-t z-10 relative">
        <button
          type="button"
          className={`p-2  font-semibold ${
            selectedFilter.length <= 0
              ? 'text-gray-400 border border-gray-100 rounded-xl bg-gray-100 select-none'
              : 'text-indigo-600 hover:text-gray-500 '
          }`}
          disabled={selectedFilter.length <= 0}
          onClick={handleClearAllFilter}
        >
          Clear All
        </button>
        <button
          type="button"
          className="flex justify-center items-center border p-2 rounded-xl gap-2 border-indigo-600 bg-indigo-600 text-white font-semibold hover:bg-white hover:text-indigo-600"
          onClick={handleSubmitFilter}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
