import {MdFilterAlt} from 'react-icons/md';
// import {MdFilterList} from 'react-icons/md';

import TabFilterButton from './button/TabFilterButton';
import TabFilterSelect from './selectbox/TabFilterSelect';
import useProductFilterDrawer from '../../../hooks/useProductFilterDrawer';

export default function TabFilter({specItems, specProduct, onSubmit, onClear}) {
  //active filter
  //need to know filter that selected

  const {onOpenFilterDrawer} = useProductFilterDrawer();
  return (
    <div className="grid grid-cols-[auto,1fr,auto] w-full border-b pb-5 gap-2">
      <TabFilterButton
        icon={<MdFilterAlt />}
        title="All Filters"
        onClick={() =>
          onOpenFilterDrawer(specItems, specProduct, onSubmit, onClear)
        }
      />
      <div className="bg-slate-100 overflow-x-auto">Activo</div>

      <TabFilterSelect />
    </div>
  );
}
