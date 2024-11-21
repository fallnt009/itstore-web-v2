import useNewProductList from '../../hooks/useNewProductList';

import NewProductListContent from '../product-lists/new-product/NewProductListContent';

import ParginationIndicator from '../../../shared/components/ui/ParginationIndicator';
import ErrorPage from '../../../shared/features/error/ErrorPage';

export default function NewProductListContainer() {
  const {
    NewProductList,
    inWishlist,
    loading,
    error,
    errorStatus,
    page,
    totalPages,
    submitChangePage,
  } = useNewProductList();

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <div className="mx-10">
      <div>
        <NewProductListContent
          newProducts={NewProductList}
          inWishlist={inWishlist}
          //   filters={ProductFilters}
          loading={loading}
          //   onSubmit={submitFilter} //handle submit
          //   onClear={clearFilter} //clear filter state
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
