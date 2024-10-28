import {useState} from 'react';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';

export default function Accordion({article, answer}) {
  const [isOpen, setIsOpen] = useState(false);
  //state isOpen
  //question and answer
  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between border rounded-t-lg p-4">
        <h1 className="font-semibold">{article}</h1>
        {isOpen ? (
          <button type="button" onClick={handleToggleOpen}>
            <MdKeyboardArrowUp size={25} />
          </button>
        ) : (
          <button type="button" onClick={handleToggleOpen}>
            <MdKeyboardArrowDown size={25} />
          </button>
        )}
      </div>
      {isOpen && (
        <div className="border-x border-b rounded-b-lg p-4 text-gray-500">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
