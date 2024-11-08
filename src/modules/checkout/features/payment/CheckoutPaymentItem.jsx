export default function CheckoutPaymentItem({select, payment, onClick}) {
  const {id, name} = payment || {};

  const isSelected = select && select.id === id;

  return (
    <div
      className={`flex flex-col gap-1 mt-5 border-2 p-3 py-4 rounded-lg hover:border-cerulean-blue-800 cursor-pointer ${
        isSelected ? 'border-indigo-700' : ''
      }`}
      onClick={() => onClick(payment)}
    >
      <div className="flex justify-between">
        <h4 className="font-semibold ">{name}</h4>
      </div>
    </div>
  );
}
