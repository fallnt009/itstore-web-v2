import {useState} from 'react';

import Image from './Image';

export default function ImageSlider({images}) {
  const [imageIndex, setImageIndex] = useState(0);

  const handleSelectImage = (index) => {
    setImageIndex(index);
  };

  // const images = [
  //   {
  //     path: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  //   {
  //     path: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXJsfGVufDB8fDB8fHww',
  //   },
  //   {
  //     path: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXJsfGVufDB8fDB8fHww',
  //   },
  //   {
  //     path: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
  //   },
  //   {
  //     path: 'https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
  //   },
  // ];

  return (
    <div className="max-w-[400px] mx-auto">
      <div className="mb-4">
        {/* Main Image */}
        <Image
          src={images[imageIndex]?.path}
          width={400}
          height={400}
          className="object-cover h-full w-full transition-all duration-500 ease-in-out opacity-100"
        />
      </div>
      <div className="flex gap-3 overflow-x-auto max-w-full scrollbar-none">
        {images?.map((el, index) => (
          <div
            key={index}
            onClick={() => handleSelectImage(index)}
            className={`cursor-pointer ${
              index === imageIndex
                ? 'border-2 border-blue-500'
                : 'border-2 border-transparent'
            } transition-all duration-300 ease-in-out`}
          >
            <Image
              key={el.id}
              src={el.path}
              width={80}
              height={80}
              className="object-cover h-full w-full transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
