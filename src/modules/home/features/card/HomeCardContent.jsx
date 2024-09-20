import {Link} from 'react-router-dom';
import HomeCardContentInfo from './HomeCardContentInfo';

export default function HomeCardContent({product}) {
  const {
    title,
    price,
    ProductSubCategory,
    ProductDiscount,
    ProductImages,
    slug,
  } = product;

  const subCategoryName =
    ProductSubCategory?.BrandCategorySub?.SubCategory?.slug || 'unknown';
  const categoryName =
    ProductSubCategory?.BrandCategorySub?.BrandCategory?.MainCategory?.slug ||
    'unknown';

  const productImages = ProductImages[0]?.path;

  return (
    <div className="text-sm px-2 pt-4 pb-4 bg-slate-100 rounded-md ">
      <Link
        className="grid grid-rows-2 justify-center "
        // to={PRODUCT_DETAIL_NAV(categoryName, subCategoryName, slug)}
      >
        <div className="row-span-2">
          <HomeCardContentInfo
            title={title}
            subCategoryName={subCategoryName}
            price={price}
            discount={ProductDiscount?.Discount}
          />
        </div>
        <div className="row-span-1">
          <div className="flex justify-center">
            <img
              src={productImages || ''}
              className={`cursor-pointer hover:border-2 h-full object-contain rounded-md`}
              alt="product"
              width="200px"
              height="200px"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
