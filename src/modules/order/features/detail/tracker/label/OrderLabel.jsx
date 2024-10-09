export default function OrderLabel({id, title, currentStep, isCancel}) {
  const isCurrentOrPast = currentStep >= id; //check current step
  const isCancelled = isCancel; //check state if cancel
  return (
    <p
      className={`flex items-center text-sm font-medium pb-4 text-center ${
        isCancelled
          ? 'text-red-500'
          : isCurrentOrPast
          ? 'text-green-500'
          : 'text-gray-500'
      }`}
    >
      {title}
    </p>
  );
}
