import {MdFilterAlt} from 'react-icons/md';

export default function TabFilter() {
  //can change page and rows
  return (
    <div className="text-base">
      <form className="text-stone-700">
        <div className="flex gap-2 items-center p-2 border-b">
          <h1 className="flex items-center gap-1 py-2 font-semibold text-indigo-600">
            <span>
              <MdFilterAlt />
            </span>
            Pages
          </h1>
        </div>
      </form>
    </div>
  );
}
