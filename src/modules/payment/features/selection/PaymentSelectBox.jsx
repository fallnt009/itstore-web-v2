import {BsBank2} from 'react-icons/bs';
import {MdQrCode2, MdArrowForwardIos} from 'react-icons/md';

export default function PaymentSelectBox({id, name, selected, onSelect}) {
  const iconsMapping = {
    1: {icon: <BsBank2 size={25} />},
    2: {icon: <MdQrCode2 size={25} />},
  };

  const {icon} = iconsMapping[id];

  return (
    <button
      className={`flex items-center justify-between p-4 border-2 rounded-lg hover:border-indigo-700 hover:text-indigo-700`}
      onClick={() => onSelect(id)}
    >
      <div className="flex gap-2">
        <span>{icon}</span>
        <h1 className="font-semibold"> {name}</h1>
      </div>
      <span>
        <MdArrowForwardIos />
      </span>
    </button>
  );
}
