import useProductList from '../../hooks/useProductList';
import useProductFilter from '../../hooks/useProductFilter';

import ProductListContent from './contents/ProductListContent';
import ParginationIndicator from '../../../shared/components/ui/ParginationIndicator';
import ErrorPage from '../../../shared/features/error/ErrorPage';
import SideDrawer from '../../../shared/components/ui/SideDrawer';

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
    submitChangePage,
  } = useProductList();

  const {isOpen, closeDrawer, drawerContent} = useProductFilter();

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <div>
      <div>
        <ProductListContent
          products={ProductList}
          inWishlist={inWishlist}
          filters={ProductFilters}
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
      <SideDrawer width="max-w-sm" isOpen={isOpen} onClose={closeDrawer}>
        {drawerContent}
      </SideDrawer>
    </div>
  );
}
