import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

import {
  HOME,
  PRODUCT_LIST_NAV,
} from '../../../../../shared/services/config/routing';

export default function ProductInfoBreadCrumb({data, productName}) {
  const {BrandCategory, SubCategory} = data || [];

  const subCategoryName = SubCategory?.title;

  //   //slug
  const categorySlug = BrandCategory?.MainCategory?.slug;
  const subCategorySlug = SubCategory?.slug;

  return (
    <div className="flex items-center gap-2">
      <Link to={HOME}>HOME</Link>
      <span className="text-indigo-600">
        <MdKeyboardArrowRight size={20} />
      </span>
      <Link to={PRODUCT_LIST_NAV(categorySlug, subCategorySlug)}>
        {subCategoryName}
      </Link>
      <span className="text-indigo-600">
        <MdKeyboardArrowRight size={20} />
      </span>
      <h1 className="font-semibold">{productName}</h1>
    </div>
  );
}
