import {MdClose} from 'react-icons/md';

export default function ActiveFilterButton({title}) {
  //remove filter
  return (
    <div
      type="button"
      className="flex text-sm items-center gap-2 bg-blue-600 text-blue-700 bg-opacity-10 pl-2 py-1 rounded-xl  transition-all duration-200 select-none"
    >
      {title}
      <span className="hover:bg-slate-300 rounded-full p-1 cursor-pointer">
        <MdClose />
      </span>
    </div>
  );
}
