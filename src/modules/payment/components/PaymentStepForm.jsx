export default function PaymentStepForm({
  step,
  title,
  status = 'none',
  content,
}) {
  const statusMapping = {
    none: {name: ''},
    required: {name: 'REQUIRED'},
    optional: {name: 'OPTIONAL'},
  };

  const {name} = statusMapping[status];

  return (
    <div className="bg-white p-4 border rounded-lg">
      <div className="flex justify-between items-center select-none">
        <div className="flex items-center gap-5">
          <span className="flex justify-center items-center bg-black rounded-full text-white h-8 w-8">
            {step}
          </span>
          <h1 className="font-bold">{title}</h1>
        </div>
        {name && (
          <div className="border rounded-xl px-3 py-1 text-xs border-gray-100 bg-gray-200 text-gray-700 font-bold">
            {name}
          </div>
        )}
      </div>
      <div>{content}</div>
    </div>
  );
}
