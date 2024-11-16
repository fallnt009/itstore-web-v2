import {useState} from 'react';

export default function AddedButton({onClick, id}) {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = async () => {
    setIsAdded(true);
    await onClick(id);
    // Reset back to "Save to Wishlist" after 1 seconds
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`font-bold text-sm px-6 py-2 rounded-3xl border 
    ${
      isAdded
        ? 'bg-green-600 text-white border-green-600'
        : 'hover:bg-indigo-700 hover:text-white border-gray-600'
    }`}
    >
      {isAdded ? 'Added to Wishlist' : 'Save to Wishlist'}
    </button>
  );
}
