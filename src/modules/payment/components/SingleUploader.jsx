import {useRef, useState} from 'react';

import {MdImage} from 'react-icons/md';
import {MdClose} from 'react-icons/md';

export default function SingleUploader({select, onSubmit}) {
  const [dragOver, setDragOver] = useState(false);

  const dropAreaRef = useRef(null);
  const hiddenFileInput = useRef(null);

  //handleDrag
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragOver(true);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0]; // Only take the first file
    if (file) {
      const image = {file, url: URL.createObjectURL(file)};
      onSubmit([image]); // Update the state with the single image
    }
  };

  const handleClickUpload = () => {
    hiddenFileInput.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Only take the first file
    if (file) {
      const image = {file, url: URL.createObjectURL(file)};
      onSubmit([image]); // Update the state with the single image
    }
  };

  const handleRemoveImage = () => {
    const updatedImages = []; // Reset the images array
    onSubmit(updatedImages);
  };

  return (
    <div className="py-4 px-4">
      {select.length > 0 ? (
        <div className="flex justify-center">
          <div className="relative py-2 ">
            <button
              className="absolute -right-3 -top-2 p-1 rounded-full text-white bg-red-600 hover:bg-stone-400"
              onClick={handleRemoveImage}
            >
              <MdClose size={15} />
            </button>
            <img
              src={select[0].url}
              alt="selected 1"
              className="max-h-[250px] max-w-[250px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      ) : (
        <div
          className={`flex justify-center flex-col border-2 border-dashed py-20 px-4 cursor-pointer ${
            dragOver ? 'border-blue-500' : 'border-gray-300'
          } `}
          ref={dropAreaRef}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div
            className="flex flex-col gap-2 justify-center items-center text-gray-500 hover:text-blue-500"
            onClick={handleClickUpload}
          >
            <span>
              <MdImage size={50} />
            </span>
            <div>
              <h1 className="text-lg font-semibold ">
                Drag a file here or click to select one
              </h1>
              <p className="text-sm ">
                Attach bank receipt or transaction screenshot for fast
                confirmation. File should not exceed 5 mb.
              </p>
            </div>
          </div>
          <input
            type="file"
            className="hidden"
            ref={hiddenFileInput}
            onChange={handleImageChange}
          ></input>
        </div>
      )}
    </div>
  );
}
