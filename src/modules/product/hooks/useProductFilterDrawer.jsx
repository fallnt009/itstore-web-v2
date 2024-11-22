import {useCallback} from 'react';
import useDrawer from '../../shared/hooks/useDrawer';

import SidebarFilter from '../features/filters/SidebarFilter/SidebarFilter';

export default function useProductFilterDrawer() {
  //useDrawer
  const {isOpen, openDrawerWithContent, drawerContent, closeDrawer} =
    useDrawer();
  //sidebar content
  const onOpenFilterDrawer = useCallback(
    (specItems, specProduct, onSubmit, onClear) => {
      openDrawerWithContent(
        <SidebarFilter
          specItems={specItems}
          specProduct={specProduct}
          onSubmit={onSubmit}
          onClear={onClear}
          onCloseDrawer={closeDrawer}
        />
      );
    },
    [openDrawerWithContent, closeDrawer]
  );

  return {isOpen, drawerContent, closeDrawer, onOpenFilterDrawer};
}
