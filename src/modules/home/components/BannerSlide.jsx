import {useEffect, useState} from 'react';
import {MdArrowCircleLeft, MdArrowCircleRight} from 'react-icons/md';

export default function BannerSlide({imgUrl, interval = 8000}) {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [showIndicators, setShowIndicators] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const getItemPerPage = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [itemPerPage, setItemPerPage] = useState(getItemPerPage());

  const totalPages = Math.ceil(imgUrl.length / itemPerPage);

  const handlePrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setIndex((prevIndex) => (prevIndex + 1) % totalPages);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };
  useEffect(() => {
    // Dynamically adjust the number of items per page on resize
    const handleResize = () => {
      setItemPerPage(getItemPerPage());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isPause) {
      const slideInterval = setInterval(() => {
        if (!isTransitioning) {
          handleNext();
        }
      }, interval);
      return () => clearInterval(slideInterval);
    }
  }, [isPause, index, interval, isTransitioning]);

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
    <div
      className="relative xl:max-w-full sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] max-h-[700px] mx-auto w-full overflow-hidden"
      onMouseEnter={showIndicatorHandler}
      onMouseLeave={hideIndicatorHandler}
    >
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {imgUrl.map((url, idx) => (
          <div
            key={idx}
            className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 aspect-video max-h-[400px] px-2"
          >
            <img
              src={url}
              alt={`banner${idx}`}
              className="w-full h-full object-cover mx-auto rounded-2xl"
            />
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
      {/* Carousel Indicator */}

      <div className="flex justify-center gap-1 opacity-50 my-3">
        {[...Array(totalPages)].map((_, current) => (
          <span
            key={current}
            className={`w-2 h-2 rounded-full flex-shrink-0 bg-gray-400 cursor-pointer ${
              current === index ? 'bg-gray-800' : ''
            } `}
            onClick={() => handleIndicator(current)}
            aria-label={`Go to slide ${current + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
