import {Link} from 'react-router-dom';

import {HOME} from '../../shared/services/config/routing';

export default function CartEmpty() {
  return (
    <div className="px-10 pt-10 pb-52">
      <h1 className="text-3xl text-cerulean-blue-800 font-semibold">
        Oh no ! Your Cart is empty
      </h1>
      <h2 className="text-xl">
        Select our product{' '}
        <Link to={HOME} className="hover:text-cerulean-blue-800">
          here
        </Link>
      </h2>
    </div>
  );
}
