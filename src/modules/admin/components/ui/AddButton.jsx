import {useNavigate} from 'react-router-dom';
import {MdAdd} from 'react-icons/md';

export default function AddButton({title, path}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };
  return (
    <button
      type="button"
      className="flex items-center gap-2 p-2 border 
      rounded-lg hover:bg-white bg-blue-100 text-blue-600 text-base"
      onClick={handleNavigate}
    >
      <span>
        <MdAdd />
      </span>
      <h2>{title}</h2>
    </button>
  );
}
