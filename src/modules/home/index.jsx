import useHomePage from './hooks/useHomePage';

import MenuContent from './features/homepage/menu/MenuContent';
import BestDealsContent from './features/homepage/contents/BestDealContent';
import BannerSlider from './features/homepage/banner/BannerSlider';
import NewArrivalContent from './features/homepage/contents/NewArrivalContent';

import ErrorPage from '../shared/features/error/ErrorPage';

export default function HomeContainer() {
  const {Home, loading, error, errorStatus} = useHomePage();

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
