import {MdFilterAlt} from 'react-icons/md';
import {MdFilterList} from 'react-icons/md';

import TabFilterButton from './button/TabFilterButton';
import TabFilterSelect from './selectbox/TabFilterSelect';
import useProductFilterDrawer from '../../../hooks/useProductFilterDrawer';

export default function TabFilter({specItems, specProduct, onSubmit, onClear}) {
  //can change page and rows

  const {onOpenFilterDrawer} = useProductFilterDrawer();
  return (
    <div className="flex border-b pb-5 gap-2">
      <TabFilterButton
        icon={<MdFilterAlt />}
        title="All Filters"
        onClick={() =>
          onOpenFilterDrawer(specItems, specProduct, onSubmit, onClear)
        }
      />

      <TabFilterSelect />
    </div>
  );
}
