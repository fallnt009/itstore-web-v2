import {MdCheckCircle, MdCancel} from 'react-icons/md';

export default function OrderStep({id, title, currentStep, isCancel}) {
  const isCurrentOrPast = currentStep >= id; //check current step
  const isCancelled = isCancel; //check state if cancel

  //title //
  return (
    <div className="flex flex-col justify-center items-center relative z-10">
      <div
        className={`h-10 w-10 flex justify-center items-center rounded-full ${
          isCancelled
            ? 'bg-red-500'
            : isCurrentOrPast
            ? 'bg-green-500'
            : 'bg-gray-300'
        }`}
      >
        {isCancelled ? (
          <MdCancel className="h-8 w-8 text-white" />
        ) : isCurrentOrPast ? (
          <MdCheckCircle className="h-8 w-8 text-white" />
        ) : null}
      </div>
      {/* Label */}
      {/* <p
        className={`text-sm font-medium pt-4 text-center ${
          isCancelled
            ? 'text-red-500'
            : isCurrentOrPast
            ? 'text-green-500'
            : 'text-gray-500'
        }`}
      >
        {title}
      </p> */}
    </div>
  );
}
