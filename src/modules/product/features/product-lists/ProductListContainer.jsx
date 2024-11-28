import {useParams} from 'react-router-dom';

import useProductList from '../../hooks/useProductList';
import useProductFilter from '../../hooks/useProductFilter';

import ProductListBreadCrumb from './contents/breadcrumb/ProductListBreadCrumb';
import ProductListHeader from './contents/ProductListHeader';

import TabFilter from '../filters/TabFilter/TabFilter';
import ProductListContent from './contents/ProductListContent';

import ProductListLoading from './loading/ProductListLoading';
import ParginationIndicator from '../../../shared/components/ui/ParginationIndicator';
import ErrorPage from '../../../shared/features/error/ErrorPage';
import SideDrawer from '../../../shared/components/ui/SideDrawer';
import NotFound from './not-found/NotFound';

export default function ProductListContainer() {
  const {categorySlug, subCategorySlug} = useParams();

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

  const {items, totalItems} = ProductList;
  const {specItems, specProduct} = ProductFilters;

  if (error) {
    return <ErrorPage statusCode={errorStatus} />;
  }

  return (
    <div>
      <div className="flex flex-col gap-5 py-5">
        <ProductListBreadCrumb subCategorySlug={subCategorySlug} />
        <ProductListHeader
          categorySlug={categorySlug}
          subCategorySlug={subCategorySlug}
        />
      </div>
      <div>
        <TabFilter
          specItems={specItems}
          specProduct={specProduct}
          totalItems={totalItems}
          subCategorySlug={subCategorySlug}
        />
      </div>
      <div>
        {loading && items ? (
          <ProductListContent
            items={items} // Keep showing old items while loading
            inWishlist={inWishlist}
            loading={loading}
          />
        ) : loading ? (
          <ProductListLoading />
        ) : items ? (
          <ProductListContent
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
      <SideDrawer width="max-w-sm" isOpen={isOpen} onClose={closeDrawer}>
        {drawerContent}
      </SideDrawer>
    </div>
  );
}
