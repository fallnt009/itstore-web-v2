import {useNavigate} from 'react-router-dom';

import {NumericFormat} from 'react-number-format';

import {MdEdit, MdDelete} from 'react-icons/md';

import {ADMIN_PRODUCT_EDIT} from '../../../../../../shared/services/config/routing';

export default function AdminProductTableItem({product, onOpenPopup}) {
  const navigate = useNavigate();

  const handleClickEdit = () => {
    navigate(ADMIN_PRODUCT_EDIT(product.id));
  };

  //stock

  return (
    <tr className="bg-white border-b">
      <td className="py-2">
        <p className="text-sm">{product.id}</p>
      </td>

      <td className="p-2">
        <p className="flex justify-start overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.title}
        </p>
      </td>
      <td className="py-2 px-4 text-start text-sm">
        <NumericFormat
          value={product.price}
          displayType="text"
          thousandSeparator=","
          decimalScale={2}
          fixedDecimalScale={true}
          prefix="฿"
        />
      </td>
      <td className="py-2 px-4">
        <div
          className={`py-1 select-none text-xs font-semibold rounded-lg ${
            product.isActive
              ? 'text-green-600 bg-green-100'
              : ' text-red-500 bg-red-100'
          }`}
        >
          {product.isActive ? 'Active' : 'Inactive'}
        </div>
      </td>
      <td className="py-2 px-4">
        <div
          className={`py-1 select-none text-xs font-semibold rounded-lg ${
            product.qtyInStock > 0 ? 'text-green-600 ' : ' text-red-500 '
          }`}
        >
          {product.qtyInStock > 0
            ? `In Stock (${product.qtyInStock})`
            : 'Out of Stock'}
        </div>
      </td>
      <td className="py-2 px-4">
        <div className="py-2 flex justify-around items-center">
          <button type="button" className="" onClick={handleClickEdit}>
            <MdEdit />
          </button>
          <button
            type="button"
            className="text-gray-500"
            onClick={() => onOpenPopup(product.id)}
            disabled
          >
            <MdDelete />
          </button>
        </div>
      </td>
    </tr>
  );
}
