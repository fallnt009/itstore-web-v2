import {Link} from 'react-router-dom';

import HomeCardContentInfo from './HomeCardContentInfo';
import Image from '../../../components/Image';
import {PRODUCT_INFO_NAV} from '../../../../shared/services/config/routing';

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

  const productImages = ProductImages?.[0]?.path || '';
  console.log(productImages);

  return (
    <div className="text-sm px-2 pt-4 pb-4 bg-slate-100 rounded-md ">
      <Link
        className="grid grid-rows-2 justify-center "
        to={PRODUCT_INFO_NAV(categoryName, subCategoryName, slug)}
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
            <Image
              src={productImages}
              className={`cursor-pointer hover:border-2 h-full object-contain rounded-md`}
              alt="product"
              width="250"
              height="250"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
