// import {MdClose} from 'react-icons/md';
import SearchInput from '../components/SearchInput';

export default function SelectTabFilter({
  sorts,
  filters,
  onChangeSort,
  onChangeFilter,
  onChangeSearch,
  onClear,
}) {
  const {sortBy, sortValue} = sorts;
  const {inStock, isActive} = filters;

  const checkActive = isActive === true ? 'active' : 'inactive';
  const checkStock = inStock === true ? 'instock' : 'outOfStock';

  const checkSort = (sortBy, sortValue) => {
    const sortMapping = {
      createdAt: {
        ASC: 'asc',
        DESC: 'desc',
      },
      price: {
        ASC: 'lowestPrice',
        DESC: 'highestPrice',
      },
    };

    if (sortMapping[sortBy] && sortMapping[sortBy][sortValue]) {
      return sortMapping[sortBy][sortValue];
    }
    return '';
  };

  const currentSort = checkSort(sortBy, sortValue);

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <select
          className="p-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-slate-100 font-semibold cursor-pointer"
          value={checkActive}
          onChange={(e) => onChangeFilter(e.target.value)}
        >
          <option value="active">Active</option>
          <option value="inactive">In Active</option>
        </select>
        <select
          className="p-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500  bg-slate-100 font-semibold cursor-pointer"
          value={checkStock}
          onChange={(e) => onChangeFilter(e.target.value)}
        >
          <option value="instock">In Stock</option>
          <option value="outOfStock">Out of Stock</option>
        </select>
        <div>
          <SearchInput onChangeSearch={onChangeSearch} />
        </div>
        <button
          className="p-2 px-4 hover:text-gray-700  text-blue-600 font-semibold"
          onClick={onClear}
        >
          Clear All
        </button>
      </div>
      <div>
        <select
          className="p-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-slate-100 font-semibold cursor-pointer"
          value={currentSort}
          onChange={(e) => onChangeSort(e.target.value)}
        >
          <option value="highestPrice">Highest Price</option>
          <option value="lowestPrice">Lowest Price</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
}
