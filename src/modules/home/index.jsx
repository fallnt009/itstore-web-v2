import {useState, useEffect} from 'react';

import useProduct from '../shared/hooks/useProduct';

import MenuContent from './features/menu/MenuContent';
import BestDealsContent from './features/bestDeals/BestDealContent';
import BannerSlider from './features/banner/BannerSlider';
import NewArrivalContent from './features/newArrivals/NewArrivalContent';

export default function HomeContainer() {
  //loading for skeleton
  const [loading, setLoading] = useState(false);
  //useProduct hook
  const {Home, fetchHome} = useProduct();
  //useEffect fetchHomeProduct
  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        await fetchHome();
      } catch (err) {
        console.log(err);
      }
    };
    fetchHomePage();
  }, [fetchHome]);
  //HomeQuickMenu
  //Best Deals
  //banner

  console.log(Home);

  //newArrivals
  return (
    <div className="px-10 py-10">
      <MenuContent />
      <BestDealsContent salesProduct={Home.salesProducts} />
      <BannerSlider />
      <NewArrivalContent newProducts={Home.newProducts} />
    </div>
  );
}
