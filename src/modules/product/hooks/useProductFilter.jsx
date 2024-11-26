import {useState, useCallback} from 'react';

import useDrawer from '../../shared/hooks/useDrawer';

import useProductList from './useProductList';

import SidebarFilter from '../features/filters/SidebarFilter/SidebarFilter';

export default function useProductFilter() {
  const [tabFilter, setTabFilter] = useState([]);
  //useDrawer
  const {isOpen, openDrawerWithContent, drawerContent, closeDrawer} =
    useDrawer();

  const {submitFilter, clearFilter} = useProductList();

  const clearAllFilters = useCallback(() => {
    clearFilter();
  }, [clearFilter]);

  const clickSubmitFilter = useCallback(
    (filter) => {
      submitFilter(filter);
      setTabFilter(filter);
      //closeDrawer
      closeDrawer();
    },
    [submitFilter, closeDrawer]
  );
  //remove single filter

  //sidebar content
  const openFilterDrawer = useCallback(
    (specItems, specProduct) => {
      openDrawerWithContent(
        <SidebarFilter
          specItems={specItems}
          specProduct={specProduct}
          onSubmit={clickSubmitFilter}
          onClear={clearAllFilters}
          onCloseDrawer={closeDrawer}
        />
      );
    },
    [openDrawerWithContent, closeDrawer, clickSubmitFilter, clearAllFilters]
  );

  return {
    isOpen,
    drawerContent,
    closeDrawer,
    tabFilter,
    openFilterDrawer,
    clearAllFilters,
    clickSubmitFilter,
  };
}
