export default function OrderDeliveryInfo({OrderDetail}) {
  const parcelName = OrderDetail?.deliveryName;
  const trackingNo = OrderDetail?.trackingNumber;

  return (
    <div>
      <h4 className="font-semibold">Delivery Info</h4>
      <div className="py-2">
        <p className="text-stone-500 text-sm">Parcel Service</p>
        <div className="py-2">
          <p>{parcelName ? parcelName : 'N/A'}</p>
        </div>
      </div>
      <div className="py-2">
        <p className="text-stone-500 text-sm">Tracking Number</p>
        <div className="py-2">
          <p>{trackingNo ? trackingNo : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}
