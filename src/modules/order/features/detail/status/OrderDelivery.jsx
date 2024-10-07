export default function OrderDelivery({OrderDetail}) {
  const {UserAddress, Service} = OrderDetail || {};

  // //address
  const {addressLine1, addressLine2, province, postalCode, phoneNumber} =
    UserAddress?.Address || {};

  // //service
  const {serviceName, serviceDesc} = Service || {};

  return (
    <div>
      <h4 className="font-semibold">Delivery</h4>
      <div className="py-2">
        <p className="text-stone-500 text-sm">Address</p>
        <div className="flex flex-col py-2">
          <p>{addressLine1}</p>
          <p>{addressLine2}</p>
          <div className="flex gap-1">
            <p>{province}</p>
            <p>{postalCode}</p>
          </div>
          <p>{phoneNumber}</p>
        </div>
      </div>
      <div className="py-2">
        <p className="text-stone-500 text-sm">Delivery method</p>
        <div className="py-2">
          <p>{serviceName}</p>
          <p>{serviceDesc}</p>
        </div>
      </div>
    </div>
  );
}
