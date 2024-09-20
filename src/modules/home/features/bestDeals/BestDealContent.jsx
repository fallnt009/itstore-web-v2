import {useNavigate} from 'react-router-dom';
import {MdArrowRight} from 'react-icons/md';

import HomeCard from '../card/HomeCard';
import HomeCardError from '../card/HomeCardError';

export default function BestDealContent({salesProduct = [], loading}) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // navigate(SALE_PRODUCT);
    navigate(0);
  };
  return (
    <div className="py-10">
      <div className="flex flex-col justify-start">
        <h1 className="text-3xl text-indigo-700 font-semibold">Best Deals</h1>
        <div>
          <button
            type="button"
            className="bg-white  py-2 rounded-xl text-indigo-700 flex items-center hover:font-semibold"
            onClick={handleRedirect}
          >
            See more
            <span>
              <MdArrowRight />
            </span>
          </button>
        </div>
      </div>
      {salesProduct.length ? (
        <div className="grid lg:grid-cols-5 gap-5 py-5">
          {salesProduct?.map((item) => (
            <HomeCard key={item.id} product={item} loading={loading} />
          ))}
        </div>
      ) : (
        <HomeCardError />
      )}
    </div>
  );
}
