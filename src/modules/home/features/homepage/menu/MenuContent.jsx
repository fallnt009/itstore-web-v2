import Carousel from '../../../../shared/components/ui/Carousel';

import MenuContentItem from './MenuContentItem';

import gpu from '../../../../../assets/images/menu/gpu.png';
import psu from '../../../../../assets/images/menu/psu.png';
import storage from '../../../../../assets/images/menu/nvmd.png';
import glaptop from '../../../../../assets/images/menu/gamelaptop.png';
import cpu from '../../../../../assets/images/menu/cpu.png';
import caseA from '../../../../../assets/images/menu/case.png';

export default function MenuContent() {
  const imgUrl = [
    'https://cdn.wccftech.com/wp-content/uploads/2021/10/FCsT0UMWQAoFVWq.jpg',
    'https://pbs.twimg.com/media/FfejDlVUcAAJEFE.jpg',
    'https://pbs.twimg.com/media/EAMTFIiVUAUHZRI.jpg',
    'https://www.ryt9.com/img/files/20220928/iq23ce27eaf62743ef527a158fa86a93b1.jpg',
  ];
  return (
    <div className="pb-5 pt-5">
      <div className="grid xl:grid-cols-2 gap-4">
        <div className="grid">
          <div className="grid grid-rows-2 gap-4">
            <Carousel imgUrl={imgUrl} />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-200 rounded-md">
                <MenuContentItem
                  title="Storage"
                  size={200}
                  src={storage}
                  url="/categories/component/storage"
                />
              </div>
              <div className="bg-slate-200 rounded-md">
                <MenuContentItem
                  title="Power Supply"
                  size={200}
                  src={psu}
                  url="/categories/component/powersupply"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="grid grid-rows-2 grid-cols-2 gap-4">
            <div className=" bg-slate-200 rounded-md">
              <MenuContentItem
                title="Get Your Gaming Laptop"
                size={200}
                src={glaptop}
                url="/categories/laptop/gaming-laptop"
              />
            </div>
            <div className=" bg-slate-200  rounded-md">
              <MenuContentItem
                title="Explore Product"
                size={200}
                src={cpu}
                url="/categories/component/cpu"
              />
            </div>
            <div className=" bg-slate-200  rounded-md">
              <MenuContentItem title="Best Deals" src={caseA} size={200} />
            </div>
            <div className=" bg-slate-200  rounded-md">
              <MenuContentItem title="Trending" src={gpu} size={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
