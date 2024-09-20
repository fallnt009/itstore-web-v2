import {MdArrowBackIos} from 'react-icons/md';

export default function NavSelectBack({title, onClose}) {
  return (
    <button
      className="flex items-center py-2 text-indigo-700 text-sm"
      onClick={onClose}
    >
      <span>
        <MdArrowBackIos />
      </span>
      {title}
    </button>
  );
}
