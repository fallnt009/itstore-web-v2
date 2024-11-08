import {useState, useEffect, useCallback} from 'react';

import NavBarCategoryContentItem from './items/NavBarCategoryContentItem';
import SubBarContent from './sub-category/SubBarContent';

import CategoryList from '../../../../../../assets/data/CategoryList.json';

export default function NavBarCategoryContent() {
  const [open, setOpen] = useState(false);
  const [selectedMenuId, setSelectedMenuId] = useState(null);

  const handleToggleOpen = useCallback(
    (id) => {
      if (selectedMenuId === id) {
        // If the same item is clicked, toggle the open state
        setOpen((prevOpen) => !prevOpen);
      } else {
        // If a different item is clicked, open the new one
        setSelectedMenuId(id);
        setOpen(true);
      }
    },
    [selectedMenuId]
  );

  const handleCloseDropdown = useCallback(() => {
    setOpen(false);
    setSelectedMenuId(null);
  }, []);

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-3">
        {CategoryList?.map((main) => (
          <NavBarCategoryContentItem
            key={main.id}
            item={main}
            src={main.src}
            open={open && selectedMenuId === main.id}
            onClick={handleToggleOpen}
          />
        ))}
      </div>
      <div
        className={`transition-opacity duration-1000 ease-in-out  ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {open && (
          <SubBarContent
            lists={CategoryList}
            selectedMenuId={selectedMenuId}
            onClose={handleCloseDropdown}
          />
        )}
      </div>
    </div>
  );
}