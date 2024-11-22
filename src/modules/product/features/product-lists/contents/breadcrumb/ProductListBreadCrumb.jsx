import {Link} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

import {HOME} from '../../../../../shared/services/config/routing';

export default function ProductListBreadCrumb({subCategorySlug}) {
  return (
    <div className="flex items-center gap-2">
      <Link to={HOME}>HOME</Link>
      <span className="text-indigo-600">
        <MdKeyboardArrowRight size={20} />
      </span>
      <h1 className="font-semibold">{subCategorySlug.toUpperCase()}</h1>
    </div>
  );
}
