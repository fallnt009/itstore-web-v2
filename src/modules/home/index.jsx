import {useState, useEffect} from 'react';

import useProduct from '../shared/hooks/useProduct';
import useError from '../shared/hooks/useError';

import MenuContent from './features/homepage/menu/MenuContent';
import BestDealsContent from './features/homepage/contents/BestDealContent';
import BannerSlider from './features/homepage/banner/BannerSlider';
import NewArrivalContent from './features/homepage/contents/NewArrivalContent';

import ErrorPage from '../shared/features/error/ErrorPage';

export default function HomeContainer() {
  //loading for skeleton
  const [loading, setLoading] = useState(false);
  //useProduct hook
  const {Home, fetchHome} = useProduct();
  //err
  const {error, errorStatus, setIsError} = useError();
  //useEffect fetchHomeProduct
  useEffect(() => {
    const fetchHomePage = async () => {
      setLoading(true);
      try {
        await fetchHome();
      } catch (err) {
        setLoading(false);
        setIsError(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    fetchHomePage();
  }, [fetchHome]);

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <div className="px-10 py-10">
      <MenuContent />
      <BestDealsContent salesProduct={Home.salesProducts} loading={loading} />
      <BannerSlider />
      <NewArrivalContent newProducts={Home.newProducts} loading={loading} />
    </div>
  );
}
