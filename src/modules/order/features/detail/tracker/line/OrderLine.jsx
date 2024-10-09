export default function OrderLine({id, isCancel, currentStep}) {
  console.log(currentStep, id);

  //add style and width
  return (
    <div className="w-[500px] flex items-center border relative z-0 -left-5">
      <div
        className={`flex-grow h-5 ${
          isCancel
            ? 'bg-red-500'
            : currentStep >= id
            ? 'bg-green-500'
            : 'bg-gray-300'
        }`}
      ></div>
    </div>
  );
}
