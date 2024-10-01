import {MdOutlineWarningAmber} from 'react-icons/md';

export default function AddressBox({defaultAddress}) {
  if (!defaultAddress || Object.keys(defaultAddress).length === 0) {
    return (
      <div className="flex justify-start text-stone-600 text-xl py-5 items-center gap-3">
        <span>
          <MdOutlineWarningAmber />
        </span>
        <h1>Please select your address</h1>
      </div>
    );
  }

  const {
    fullName,
    phoneNumber,
    addressLine1,
    addressLine2,
    postalCode,
    province,
  } = defaultAddress;
  return (
    <>
      <ul className="text-stone-600">
        <li>{fullName}</li>
        <ul className="py-2">
          <li>{addressLine1}</li>
          <li>{addressLine2}</li>
        </ul>
        <li>{postalCode}</li>
        <li>{province}</li>
        <li className="py-3">{phoneNumber}</li>
      </ul>
    </>
  );
}
