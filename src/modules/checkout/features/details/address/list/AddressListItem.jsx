import {MdDeleteOutline} from 'react-icons/md';
import useAddress from '../../../../../shared/hooks/useAddress';

export default function AddressListItem({
  addressItem,
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

  const handleSelect = (addrId) => {
    setSelectedId(addrId);
  };

  return (
    <div
      className={`container border-2 hover:border-black cursor-pointer rounded-lg p-4 ${
        selectedId ? 'border-black' : ''
      }`}
      onClick={() => handleSelect(id)}
    >
      <ul className="text-gray-500">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">{fullName}</h1>
          {selectedId ? (
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
        <li className="py-3">{phoneNumber}</li>
      </ul>
    </div>
  );
}
