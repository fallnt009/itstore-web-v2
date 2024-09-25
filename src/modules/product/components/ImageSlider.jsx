import {useState} from 'react';

import Image from './Image';

export default function ImageSlider({images}) {
  const [imageIndex, setImageIndex] = useState(0);

  const handleSelectImage = (index) => {
    setImageIndex(index);
  };

  return (
    <div className="container ">
      <div className="grid grid-cols-[1fr_3fr]">
        <div className="grid grid-rows-4 overflow-y-auto max-h-[65vh] no-scrollbar gap-3">
          {images?.map((el, index) => (
            <span
              key={index}
              onClick={() => handleSelectImage(index)}
              className="object-contain"
            >
              <Image key={el.id} src={el.path} size="100px" />
            </span>
          ))}
        </div>
        {/* Main Image */}
        <div className="max-h-[55vh] ">
          {images ? (
            <Image src={images[imageIndex]?.path} size="350px" />
          ) : (
            <div className="flex justify-center items-center h-[350px] w-[350px] bg-stone-100 text-stone-400">
              No Photo
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
