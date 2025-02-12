//@ delete

export default function CheckoutServiceItem({service, select, onClick}) {
  const {name, price, description} = service;

  return (
    <div
      className={`flex flex-col gap-1 mt-5 border-2 p-3 py-4 rounded-lg hover:border-cerulean-blue-800 cursor-pointer ${
        select ? 'border-indigo-700' : ''
      }`}
      onClick={() => onClick(service)}
    >
      <div className="flex justify-between">
        <h4 className="font-semibold ">{name}</h4>
        {price ? <h4 className="font-semibold ">{price} THB</h4> : ''}
      </div>
      {description ? (
        <p className="text-sm text-stone-600">{description}</p>
      ) : (
        ''
      )}
    </div>
  );
}
