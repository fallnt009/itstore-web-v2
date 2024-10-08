export default function OrderLine(id, isCancel, currentStep) {
  //add style and width
  return (
    <div
      className={`flex-grow h-1 ${
        isCancel
          ? 'bg-red-500'
          : currentStep > id
          ? 'bg-green-500'
          : 'bg-gray-300'
      }`}
    ></div>
  );
}
