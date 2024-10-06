import {format} from 'date-fns';

export default function OrderHeader({OrderDetail, orderStatus, createdAt}) {
  const orderNumber = OrderDetail?.orderNumber;

  return (
    <>
      <div className="flex flex-col gap-2 py-5">
        <h1 className="font-semibold text-3xl">ORDER NO: {orderNumber}</h1>
        <div className="flex gap-1 ">
          <h4 className="font-semibold">Order Status:</h4>
          <p>{orderStatus}</p>
        </div>
      </div>
      {/* FOR ORDER STATUS */}
      <div className="flex gap-5 border-b-2 py-2 pb-4">
        <div className="flex gap-1 ">
          <h4 className="font-semibold">Order date: </h4>
          <p>{createdAt ? format(new Date(createdAt), 'dd/MM/yyyy') : 'N/A'}</p>
        </div>
        <div className="flex gap-1 ">
          <h4 className="font-semibold">Estimated delivery:</h4>
          <p> {'N/A'}</p>
        </div>
      </div>
    </>
  );
}
