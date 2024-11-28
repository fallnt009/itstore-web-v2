import {useNavigate} from 'react-router-dom';
import {MdArrowRight} from 'react-icons/md';

import HomeCard from '../card/HomeCard';
import HomeCardError from '../card/HomeCardError';
import {NEW_PRODUCT} from '../../../../shared/services/config/routing';

export default function NewArrivalContent({newProducts = [], loading}) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(NEW_PRODUCT);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-indigo-700 font-semibold ">
          New Arrivals
        </h1>

        <button
          type="button"
          className="bg-white rounded-xl text-indigo-700 flex items-center hover:font-semibold"
          onClick={handleRedirect}
        >
          See more
          <span>
            <MdArrowRight />
          </span>
        </button>
      </div>

      {newProducts.length ? (
        <div className="grid lg:grid-cols-5 gap-5 py-5">
          {newProducts?.map((item) => (
            <HomeCard key={item.id} product={item} loading={loading} />
          ))}
        </div>
      ) : (
        <HomeCardError />
      )}
    </>
  );
}
