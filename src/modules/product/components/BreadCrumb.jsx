import {Link, useLocation} from 'react-router-dom';

export default function BreadCrumb() {
  const location = useLocation();
  const {pathname} = location;
  //split pathname
  const pathSpilt = pathname.split('/').filter((segment) => segment);
  //idenify
  const isProductPath = pathname.includes('/categories');

  const categoryName = isProductPath ? pathSpilt[1] : null;
  const subCategoryName = isProductPath ? pathSpilt[2] : null;
  const productName = isProductPath ? decodeURIComponent(pathSpilt[3]) : null;

  return (
    <div className="text-stone-500">
      <ul className="flex gap-3 font-semibold">
        <Link to="/">HOME</Link>
        {pathname.includes('/categories') && (
          <div className="flex gap-4 items-center">
            <div>{'/'}</div>
            <Link to={`/categories/${categoryName}/${subCategoryName}`}>
              {/* {categoryName.toUpperCase()}
          {' > '} */}
              {subCategoryName.toUpperCase()}
            </Link>
          </div>
        )}
        {pathname.includes('/categories') && (
          <div className="flex gap-4 items-center">
            <div>{'/'}</div>
            <Link>{productName.toUpperCase()}</Link>
          </div>
        )}
      </ul>
    </div>
  );
}
