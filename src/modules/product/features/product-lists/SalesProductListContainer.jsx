import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

import {HOME} from '../../../shared/services/config/routing';

import useSalesProductList from '../../hooks/useSalesProductList';

import SalesProductListContent from './sales-product/SalesProductListContent';
import ParginationIndicator from '../../../shared/components/ui/ParginationIndicator';
import ProductListLoading from './loading/ProductListLoading';
import ErrorPage from '../../../shared/features/error/ErrorPage';
import NotFound from './not-found/NotFound';

export default function SalesProductListContainer() {
  const {
    SaleProductList,
    inWishlist,
    loading,
    error,
    errorStatus,
    page,
    totalPages,
    submitChangePage,
  } = useSalesProductList();

  const {items} = SaleProductList;

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <div className="mx-10">
      <div className="py-5">
        <div className="flex items-center gap-2">
          <Link to={HOME}>Home</Link>
          <span className="text-indigo-600">
            <MdKeyboardArrowRight size={20} />
          </span>
          <h1 className="font-semibold">Best Deals</h1>
        </div>
      </div>
      <header className="flex justify-center mb-5 py-10 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="text-4xl font-semibold text-white">Best Deals</h1>
      </header>
      <div>
        {loading && items ? (
          <SalesProductListContent
            items={items} // Keep showing old items while loading
            inWishlist={inWishlist}
            loading={loading}
          />
        ) : loading ? (
          <ProductListLoading />
        ) : items ? (
          <SalesProductListContent
            items={items}
            inWishlist={inWishlist}
            loading={loading}
          />
        ) : (
          <NotFound />
        )}
      </div>
      <div className="flex justify-center gap-2 my-5">
        <ParginationIndicator
          page={page}
          totalPages={totalPages}
          handleChange={submitChangePage}
        />
      </div>
    </div>
  );
}
