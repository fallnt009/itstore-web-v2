import {MdFilterAlt} from 'react-icons/md';
import {MdRefresh} from 'react-icons/md';

import useProductFilter from '../../../hooks/useProductFilter';

import TabFilterButton from './button/TabFilterButton';
import TabFilterSelect from './selectbox/TabFilterSelect';
import ActiveFilterButton from './button/ActiveFilterButton';

export default function TabFilter({
  specItems,
  specProduct,
  totalItems,
  subCategorySlug,
}) {
  //active filter
  //need to know filter that selected

  const {tabFilter, openFilterDrawer, clearAllFilters} = useProductFilter();

  return (
    <div className="flex flex-col gap-4 border-b pb-5">
      <div className="flex items-center gap-2 px-2 text-base">
        <h1>
          All Products in "
          <span className="font-semibold">{subCategorySlug}</span>"
        </h1>
        <p className="text-gray-500 text-sm">({totalItems} items)</p>
      </div>
      <div className="grid grid-cols-[auto,1fr,auto] w-full gap-2">
        <TabFilterButton
          icon={<MdFilterAlt />}
          title="All Filters"
          onClick={() => openFilterDrawer(specItems, specProduct)}
        />
        <div className=""></div>
        <TabFilterSelect />
      </div>
      {tabFilter?.length !== 0 && (
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center font-semibold gap-2 text-blue-600 hover:bg-blue-600 hover:bg-opacity-10 rounded-xl p-2 px-3"
            onClick={clearAllFilters}
          >
            <span>
              <MdRefresh size={20} />
            </span>
            Clear All
          </button>
          <div className="flex gap-2 flex-wrap">
            {tabFilter?.map((item) => (
              <ActiveFilterButton key={item.id} title={item.text} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
