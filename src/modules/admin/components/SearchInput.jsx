import {MdSearch} from 'react-icons/md';

export default function SearchInput({onChangeSearch}) {
  return (
    <div className="relative flex item-center">
      <input
        className="p-2 pl-10 w-full bg-white border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-slate-400"
        placeholder="search..."
        onChange={(e) => onChangeSearch(e.target.value)}
      ></input>
      <i className="absolute text-slate-400 left-3 top-3">
        <MdSearch size={20} />
      </i>
    </div>
  );
}
