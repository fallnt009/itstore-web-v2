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
      className={`container border-2 hover:border-cerulean-blue-800 cursor-pointer rounded-lg p-4 ${
        selectedId ? 'border-cerulean-blue-800' : ''
      }`}
      onClick={() => handleSelect(id)}
    >
      <ul className="text-stone-600">
        <div className="flex items-center justify-between">
          {fullName}
          {selectedId ? (
            <div className="text-sm">default</div>
          ) : (
            <span
              className="hover:text-cerulean-blue-800"
              onClick={() => deleteAddress(id)}
            >
              <MdDeleteOutline size={25} />
            </span>
          )}
        </div>
        <ul className="py-2">
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
