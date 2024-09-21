import {useState, useEffect} from 'react';

import useProduct from '../shared/hooks/useProduct';

import MenuContent from './features/homepage/menu/MenuContent';
import BestDealsContent from './features/homepage/contents/BestDealContent';
import BannerSlider from './features/homepage/banner/BannerSlider';
import NewArrivalContent from './features/homepage/contents/NewArrivalContent';

export default function HomeContainer() {
  //loading for skeleton
  const [loading, setLoading] = useState(false);
  //useProduct hook
  const {Home, fetchHome} = useProduct();
  //useEffect fetchHomeProduct
  useEffect(() => {
    const fetchHomePage = async () => {
      setLoading(true);
      try {
        await fetchHome();
      } catch (err) {
        setLoading(false);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    fetchHomePage();
  }, [fetchHome]);

  return (
    <div className="px-10 py-10">
      <MenuContent />
      <BestDealsContent salesProduct={Home.salesProducts} loading={loading} />
      <BannerSlider />
      <NewArrivalContent newProducts={Home.newProducts} loading={loading} />
    </div>
  );
}
