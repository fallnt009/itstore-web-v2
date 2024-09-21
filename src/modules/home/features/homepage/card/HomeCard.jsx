import HomeCardContent from './HomeCardContent';
import HomeCardLoading from './HomeCardLoading';

export default function HomeCard({product, loading}) {
  return (
    <div className="container">
      {loading ? <HomeCardLoading /> : <HomeCardContent product={product} />}
    </div>
  );
}
