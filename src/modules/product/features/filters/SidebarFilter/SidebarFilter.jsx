import {useState, useCallback} from 'react';
import {MdClose} from 'react-icons/md';

import SidebarFilterContent from './contents/SidebarFilterContent';

import ActiveFilterButton from '../TabFilter/button/ActiveFilterButton';

export default function SidebarFilter({
  specItems,
  specProduct,
  onClear,
  onCloseDrawer,
  onSubmit,
}) {
  const [activeFilters, setActiveFilters] = useState([]);

  const selectActiveFilter = useCallback((item, isChecked) => {
    setActiveFilters((prevFilters) => {
      const updatedFilters = isChecked
        ? [...prevFilters, item]
        : prevFilters.filter((filter) => filter.id !== item.id);

      return updatedFilters;
    });
  }, []);

  const handleClearFilter = () => {
    setActiveFilters([]);
    onClear();
  };

  const handleSubmitFilter = () => {
    onSubmit(activeFilters);
  };

  return (
    <div className="box-border mx-5 pt-5 grid grid-rows-[auto,auto,1fr,auto] h-screen">
      <div className="flex gap-x-24 justify-start items-center font-semibold pb-5 border-b ">
        <button
          className="hover:bg-gray-100 p-3 rounded-full"
          onClick={onCloseDrawer}
        >
          <MdClose size={20} />
        </button>
        <h1 className="text-xl">All Filter</h1>
      </div>
      <div className="flex flex-wrap justify-center py-2 gap-2">
        {activeFilters.map((item) => (
          <ActiveFilterButton key={item.id} title={item.text} />
        ))}
      </div>
      <div className="flex-1 overflow-y-auto">
        <SidebarFilterContent
          specItems={specItems}
          specProduct={specProduct}
          activeFilters={activeFilters}
          onSelect={selectActiveFilter}
        />
      </div>
      <div className="grid grid-cols-2 pt-5 gap-3 border-t z-10 relative">
        <button
          type="button"
          className={`p-2  font-semibold ${
            activeFilters.length <= 0
              ? 'text-gray-400 border border-gray-100 rounded-xl bg-gray-100 select-none'
              : 'text-indigo-600 hover:text-gray-500 '
          }`}
          disabled={activeFilters.length <= 0}
          onClick={handleClearFilter}
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
