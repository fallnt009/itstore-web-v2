import {MdOutlineAccountCircle} from 'react-icons/md';

export default function CheckoutAddressContent({defaultAddress, isSame}) {
  const {
    fullName,
    addressLine1,
    addressLine2,
    phoneNumber,
    province,
    postalCode,
  } = defaultAddress || {};

  if (!defaultAddress) {
    return (
      <div className="mb-5 mt-3 px-3 text-gray-600 text-sm flex flex-col gap-2">
        <h1>Please select your address</h1>
      </div>
    );
  }
  if (isSame && defaultAddress) {
    return (
      <div className="mb-5 mt-3 px-3 text-gray-600 text-sm flex flex-col gap-2">
        <p>Same as shipping address</p>
      </div>
    );
  }

  return (
    <div className="mb-5 mt-3 px-3 text-gray-600 text-sm flex flex-col gap-2">
      <span className="flex items-center gap-1">
        <MdOutlineAccountCircle />
        <p>{fullName || ''}</p>
      </span>
      <p>{addressLine1 || ''}</p>
      <p>{addressLine2 || ''}</p>
      <p>
        {province || ''}, {postalCode || ''}
      </p>
      <p>{phoneNumber || 'N/A'}</p>
    </div>
  );
}
