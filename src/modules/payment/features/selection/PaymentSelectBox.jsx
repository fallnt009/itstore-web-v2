import {BsBank2} from 'react-icons/bs';
import {MdQrCode2} from 'react-icons/md';

export default function PaymentSelectBox({id, name, selected, onSelect}) {
  const iconsMapping = {
    1: {icon: <BsBank2 size={25} />},
    2: {icon: <MdQrCode2 size={25} />},
  };

  const {icon} = iconsMapping[id];

  return (
    <button
      className={`flex items-center gap-2 p-4 border-2 rounded-lg ${
        selected === id ? 'border-indigo-700 ' : ''
      }`}
      onClick={() => onSelect(id)}
    >
      <span>{icon}</span>
      <h1 className="font-semibold"> {name}</h1>
    </button>
  );
}
