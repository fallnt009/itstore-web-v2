import {MdDeleteOutline} from 'react-icons/md';
import useAddress from '../../../../../shared/hooks/useAddress';

export default function AddressListItem({
  addressItem,
  isDefault,
  selectedId,
  setSelectedId,
}) {
  const {
    id,
    fullName,
    phoneNumber,
    addressLine1,
    addressLine2,
    postalCode,
    province,
  } = addressItem;

  const {deleteAddress} = useAddress();

  return (
    <div
      className={`container border-2 hover:border-indigo-600 cursor-pointer rounded-lg p-4 ${
        selectedId ? 'border-indigo-600' : ''
      }`}
      onClick={() => setSelectedId(id)}
    >
      <ul className="text-gray-500">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-black">{fullName}</h1>
          {selectedId && isDefault ? (
            <div className="text-xs p-1 px-2 border rounded-lg bg-gray-200 font-bold text-gray-500">
              default
            </div>
          ) : (
            <span
              className="hover:text-red-500"
              onClick={() => deleteAddress(id)}
            >
              <MdDeleteOutline size={25} />
            </span>
          )}
        </div>
        <ul className="py-1">
          <li>{addressLine1}</li>
          <li>{addressLine2}</li>
        </ul>
        <li>{postalCode}</li>
        <li>{province}</li>
        <li className="pt-3">{phoneNumber}</li>
      </ul>
    </div>
  );
}
