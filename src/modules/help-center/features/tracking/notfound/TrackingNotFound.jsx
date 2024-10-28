import {MdWarning} from 'react-icons/md';

export default function TrackingNotFound() {
  return (
    <div className="h-[75vh] content-center">
      <div className="flex flex-col justify-center gap-2">
        <span className="flex justify-center">
          <MdWarning size={50} />
        </span>
        <h1 className="flex justify-center text-gray-700 font-semibold text-xl">
          No Result Found
        </h1>
        <p className="flex justify-center text-gray-700">Please try again.</p>
      </div>
    </div>
  );
}
