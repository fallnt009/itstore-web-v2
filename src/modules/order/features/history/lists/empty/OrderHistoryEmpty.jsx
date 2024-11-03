import {MdOutlineList} from 'react-icons/md';

export default function OrderHistoryEmpty() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <span className="py-2 text-gray-400">
        <MdOutlineList size={50} />
      </span>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="font-semibold  text-xl text-gray-400">
          This Section is empty.
        </h1>
      </div>
    </div>
  );
}
