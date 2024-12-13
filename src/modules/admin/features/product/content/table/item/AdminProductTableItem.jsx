import {useNavigate} from 'react-router-dom';

import {ADMIN_PRODUCT_EDIT} from '../../../../../../shared/services/config/routing';

export default function AdminProductTableItem({product}) {
  const navigate = useNavigate();

  const handleClickEdit = () => {
    navigate(ADMIN_PRODUCT_EDIT(product.id));
  };
  return (
    <tr className="bg-white border-b">
      <td className="py-2 px-4">{product.id}</td>
      <td className="py-2 flex justify-start line-clamp-1">{product.title}</td>
      <td className="py-2 px-4">{product.price}</td>
      <td className="py-2 px-4">{product.isActive ? 'Active' : 'InActive'}</td>
      <td className="py-2 px-4">In Stock</td>
      <td className="py-2 px-4 flex justify-around">
        <button type="button" className="" onClick={handleClickEdit}>
          Edit
        </button>
        <button type="button">Delete</button>
      </td>
    </tr>
  );
}
