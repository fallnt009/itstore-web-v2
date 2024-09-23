import {MdError} from 'react-icons/md';

export default function ButtonError() {
  return (
    <div className="flex items-center gap-2 rounded-lg p-2 border border-indigo-600 bg-indigo-600 text-white font-semibold ">
      <div role="status">
        <MdError />
      </div>
      <h1>Error</h1>
    </div>
  );
}
