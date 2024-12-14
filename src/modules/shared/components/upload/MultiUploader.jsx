import {useRef, useState} from 'react';

import {MdImage} from 'react-icons/md';
import {MdClose} from 'react-icons/md';

export default function MultiUploader({select, setSelect}) {
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
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const imagesArray = files
        .slice(0, 4 - select.length)
        .map((file) => ({file, url: URL.createObjectURL(file)}));
      setSelect((prevImages) => [...prevImages, ...imagesArray]);
    }
  };

  const handleClickUpload = () => {
    hiddenFileInput.current.click();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files?.length > 0) {
      const imagesArray = files
        .slice(0, 4 - select?.length)
        .map((file) => ({file, url: URL.createObjectURL(file)}));
      setSelect((prevImages) => [...prevImages, ...imagesArray]);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...select];
    URL.revokeObjectURL(updatedImages[index].url);
    updatedImages.splice(index, 1);
    setSelect(updatedImages);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div
          className={`flex justify-center flex-col border-2 border-dashed h-72  cursor-pointer ${
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
            <div className="px-10">
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
            multiple
          ></input>
        </div>
        <div className="flex justify-center gap-5 pt-3">
          {select?.map((image, index) => (
            <div key={index} className="flex justify-center relative py-2">
              <img
                src={image.path}
                alt={`selected ${index}`}
                className="max-h-[100px] max-w-[100px] object-fill rounded-lg shadow-xl"
              />
              <button
                className="absolute right-0 p-1 rounded-full text-white bg-red-600 hover:bg-stone-400"
                onClick={() => handleRemoveImage(index)}
              >
                <MdClose size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <p className="text-red-500 text-sm p-2">
        *You can only upload a maximum of 4 images.
      </p>
    </div>
  );
}
