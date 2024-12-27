import {MdArrowBackIos} from 'react-icons/md';

export default function BackButton({onClick}) {
  //use function from custom hook to click back
  return (
    <button
      type="button"
      className="flex items-center p-2 border rounded-lg bg-slate-100 text-gray-700 text-base hover:bg-blue-100 hover:text-blue-600"
      onClick={onClick}
    >
      <i>
        <MdArrowBackIos size={20} />
      </i>
      <h2>Back</h2>
    </button>
  );
}
