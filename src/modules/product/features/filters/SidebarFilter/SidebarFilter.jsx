import {useState} from 'react';
import SidebarFilterContent from './contents/SidebarFilterContent';

export default function SidebarFilter({
  specItems,
  specProduct,
  onSubmit,
  setFilters,
  setSearch,
}) {
  const [selectedFilter, setSelectedFilter] = useState([]);
  // const [searchFilter, setSearchFilter] = useState('');

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
    setFilters([]);
    // setSearch('');
  };

  // const handleChangeSearch = (e) => {
  //   e.preventDefault();
  //   setSearchFilter(e.target.value);
  // };
  return (
    <div className="p-4 border-r">
      <div className="flex justify-between items-center font-semibold">
        <h1 className="text-xl">Filter</h1>
        <button
          type="button"
          className="p-2 text-indigo-600 hover:text-gray-500 font-semibold"
          onClick={handleClearAllFilter}
        >
          Clear All
        </button>
      </div>
      {/* <SidebarFilterSearch onSearch={handleChangeSearch} /> */}
      <SidebarFilterContent
        specItems={specItems}
        specProduct={specProduct}
        filters={selectedFilter}
        onSelect={handleOnSelectFilter}
      />
      <div className="flex justify-center py-4">
        <button
          type="button"
          className="flex justify-center items-center border p-2 w-full rounded-xl gap-2 border-indigo-600 bg-indigo-600 text-white font-semibold hover:bg-white hover:text-indigo-600"
          onClick={() => onSubmit(selectedFilter)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
