import {useEffect, useState} from 'react';
import {MdArrowCircleLeft, MdArrowCircleRight} from 'react-icons/md';

export default function BannerSlide({imgUrl, interval = 8000}) {
  const [index, setIndex] = useState(0);
  const [showIndicators, setShowIndicators] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + imgUrl.length) % imgUrl.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imgUrl.length);
  };

  useEffect(() => {
    if (!isPause) {
      const slideInterval = setInterval(() => {
        handleNext();
      }, interval);
      return () => clearInterval(slideInterval);
    }
  }, [isPause, index, interval]);

  const handleIndicator = (current) => {
    setIndex(current);
  };
  const showIndicatorHandler = () => {
    setShowIndicators(true);
    //pause on SLideShow
    setIsPause(true);
  };
  const hideIndicatorHandler = () => {
    setShowIndicators(false);
    //resume SlideShow
    setIsPause(false);
  };
  return (
    <div>
      {/* Carousel item */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={showIndicatorHandler}
        onMouseLeave={hideIndicatorHandler}
      >
        {/* Carousel Image */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {imgUrl.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="flex flex-shrink-0 gap-2 justify-center w-full"
            >
              {group?.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`carousel-pic${index}`}
                  className="object-fill max-w-[550px] w-auto h-[250px] rounded-lg"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Carousel Action */}
        {showIndicators && (
          <div className="flex absolute w-full top-10 bottom-10 justify-between opacity-20 ">
            <button onClick={handlePrevious} className="bg-black rounded-lg">
              <MdArrowCircleLeft size={25} color="white" />
            </button>
            <button onClick={handleNext} className="bg-black rounded-lg">
              <MdArrowCircleRight size={25} color="white" />
            </button>
          </div>
        )}
      </div>
      {/* Carousel Indicator */}

      <div className="flex justify-center gap-1 opacity-50 my-3">
        {imgUrl.map((_, current) => (
          <span
            key={current}
            className={`w-2 h-2 rounded-full flex-shrink-0 bg-gray-400 cursor-pointer ${
              current === index ? 'bg-gray-800' : ''
            } `}
            onClick={() => handleIndicator(current)}
          ></span>
        ))}
      </div>
    </div>
  );
}
