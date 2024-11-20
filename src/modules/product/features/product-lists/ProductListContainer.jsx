import useProductList from '../../hooks/useProductList';

import ProductListContent from './contents/ProductListContent';
import ParginationIndicator from '../../../shared/components/ui/ParginationIndicator';
import ErrorPage from '../../../shared/features/error/ErrorPage';

export default function ProductListContainer() {
  const {
    ProductList,
    inWishlist,
    ProductFilters,
    loading,
    page,
    totalPages,
    error,
    errorStatus,
    submitFilter,
    clearFilter,
    submitChangePage,
  } = useProductList();

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <div className="mx-10">
      <div>
        <ProductListContent
          products={ProductList}
          inWishlist={inWishlist}
          filters={ProductFilters}
          loading={loading}
          onSubmit={submitFilter} //handle submit
          onClear={clearFilter} //clear filter state
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
