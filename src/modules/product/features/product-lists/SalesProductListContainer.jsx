import ParginationIndicator from '../../../shared/components/ui/ParginationIndicator';
import useSalesProductList from '../../hooks/useSalesProductList';

import SalesProductListContent from './sales-product/SalesProductListContent';
import ErrorPage from '../../../shared/features/error/ErrorPage';

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

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <div className="mx-10">
      <div className="py-5">breadcrumb</div>
      <header className="flex justify-center mb-5 py-10 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="text-4xl font-semibold text-white">Best Deals</h1>
      </header>
      <div>
        <SalesProductListContent
          SaleProductList={SaleProductList}
          inWishlist={inWishlist}
          loading={loading}
        />
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
