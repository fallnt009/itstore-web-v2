import {useState, useEffect, useCallback} from 'react';
import {useParams} from 'react-router-dom';

import ProductListContent from './contents/ProductListContent';
import ParginationIndicator from '../../../shared/components/ui/ParginationIndicator';
import CategoryFilters from '../../utils/CategoryFilters';

import useProduct from '../../../shared/hooks/useProduct';

export default function ProductListContainer() {
  const {categorySlug, subCategorySlug} = useParams();

  const {ProductList, ProductFilters, fetchProductList, fetchProductFilter} =
    useProduct();

  const {totalPages} = ProductList;

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  //Selected
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);

  const loadProductList = useCallback(async () => {
    setLoading(true);
    try {
      await fetchProductList(
        categorySlug,
        subCategorySlug,
        page,
        12,
        search,
        filters
      );

      //filters function to select on each category
      const title = CategoryFilters(subCategorySlug);
      //Fetch ProductFilter
      await fetchProductFilter(title, subCategorySlug);
    } catch (err) {
      setLoading(false);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [
    categorySlug,
    subCategorySlug,
    fetchProductList,
    fetchProductFilter,
    page,
    search,
    filters,
  ]);

  useEffect(() => {
    loadProductList();
  }, [loadProductList]);

  const handleSubmitFilter = (newFilters, newSearch) => {
    setFilters(newFilters);
    setSearch(newSearch);
    setPage(1);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="px-10">
      <div>
        <ProductListContent
          products={ProductList}
          filters={ProductFilters}
          loading={loading}
          onSubmit={handleSubmitFilter}
          setFilters={setFilters}
          setSearch={setSearch}
        />
      </div>
      <div className="flex justify-center gap-2 py-3">
        <ParginationIndicator
          page={page}
          totalPages={totalPages}
          handleChange={handleChangePage}
        />
      </div>
    </div>
  );
}
