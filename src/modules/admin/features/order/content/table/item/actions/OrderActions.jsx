import {MdDescription, MdOutlineComment} from 'react-icons/md';

export default function OrderActions() {
  //view order,stamp and Edits and image upload

  const buttonLists = [
    {id: 1, icon: <MdDescription size={18} />},
    {id: 2, icon: <MdOutlineComment size={18} />},
  ];
  return (
    <div className="grid grid-cols-2">
      {buttonLists.map((item) => (
        <button className="hover:text-blue-500" key={item.id}>
          {item.icon}
        </button>
      ))}
    </div>
  );
}
