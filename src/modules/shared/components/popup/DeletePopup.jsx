import {MdClose} from 'react-icons/md';

export default function DeletePopup({name, id, prevData, onClose, onSubmit}) {
  const handleConfirmDelete = () => {
    onSubmit(id);
    onClose();
  };
  return (
    <div className="w-62 h-36">
      <div className="flex justify-between text-base font-semibold pb-4">
        <h1>
          Delete {id ? `ID:${id}` : ''}
          {name} {prevData ? `${prevData.text}` : ''}
        </h1>
        <button type="button" onClick={onClose}>
          <MdClose />
        </button>
      </div>
      <div className="flex flex-col justify-center text-gray-500 text-sm">
        <p>Are you sure you want to delete this?</p>
        <p>This action cannot be undone.</p>
      </div>
      <div className="flex justify-center gap-1 py-5 font-semibold text-sm">
        <button
          type="button"
          className="flex-1 border p-2 px-4 rounded-lg bg-gray-200 text-gray-500 hover:border-gray-500 hover:bg-white"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="button"
          className="flex-1 border p-2 px-4 rounded-lg text-white bg-red-500 hover:bg-white hover:border-red-500 hover:text-red-500"
          onClick={handleConfirmDelete}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
