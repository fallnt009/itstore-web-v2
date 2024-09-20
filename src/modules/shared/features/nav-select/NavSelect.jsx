import {useState} from 'react';

import CategoryList from '../../../../assets/data/CategoryList.json';

import NavSelectBack from './ui/NavSelectBack';
import NavSelectMainButton from './ui/NavSelectMainButton';
import NavSelectSubButton from './ui/NavSelectSubButton';

export default function NavSelect() {
  const [subBarOpen, setSubBarOpen] = useState(false);
  const [selectCategory, setSelectCategory] = useState({});

  const handleOpenSubBar = (item) => {
    setSelectCategory(item);
    setSubBarOpen(true);
  };
  const handleCloseSubBar = () => {
    setSelectCategory({});
    setSubBarOpen(false);
  };

  return (
    <div className="px-10 pt-1">
      <div className="w-full bg-slate-100 rounded-md p-4">
        <div className="relative w-full h-full overflow-hidden pr-5 border-r">
          <div
            className={`flex transition-transform duration-1000 ease-in-out`}
            style={{
              transform: subBarOpen ? `translateX(0%)` : `translateX(-100%)`,
              width: '100%',
            }}
          >
            {subBarOpen && (
              <div className="flex gap-3 items-center justify-start">
                <NavSelectBack title="Back" onClose={handleCloseSubBar} />
                <div className="font-semibold text-lg">
                  {selectCategory.title}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="px-5 py-5">
          <div className="flex scrollbar-thin overflow-auto pb-3 w-full max-w-full">
            <div className="flex ">
              {!subBarOpen &&
                CategoryList?.map((item) => (
                  <div key={item.id}>
                    <NavSelectMainButton
                      item={item}
                      src={item.src}
                      onSelect={handleOpenSubBar}
                    />
                  </div>
                ))}
              {subBarOpen &&
                CategoryList?.filter(
                  (filter) => filter.id === selectCategory.id
                ).flatMap((item) =>
                  item.subCategory.map((sub) => (
                    <div key={sub.id}>
                      <NavSelectSubButton item={sub} src={sub.src} />
                    </div>
                  ))
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
