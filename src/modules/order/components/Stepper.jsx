import {useState, useRef, useEffect} from 'react';
import {MdCheckCircle, MdCancel} from 'react-icons/md';

export default function Stepper({currentStep = 1, stepsList}) {
  const [isCompleted, setIsComplete] = useState(false);
  const [margin, setMargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const stepRef = useRef([]);

  useEffect(() => {
    setMargin({
      marginLeft: stepRef.current[0]?.offsetWidth / 2,
      marginRight: stepRef.current[stepsList.length - 1]?.offsetWidth / 2,
    });
  }, [stepRef]);

  //calculate progress bar
  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsList.length - 1)) * 100;
  };

  if (!stepsList.length) {
    return <></>;
  }

  return (
    <>
      <div className="flex justify-between relative">
        {stepsList?.map((step, index) => {
          return (
            <div
              key={index}
              ref={(el) => (stepRef.current[index] = el)}
              className="flex flex-col relative justify-center items-center gap-2"
            >
              <div
                className={`relative justify-center items-center w-10 h-10 flex z-10 before:bg-gray-300 rounded-full font-semibold text-white  ${
                  currentStep > index + 1 || isCompleted ? 'bg-green-500' : ''
                } ${currentStep === index + 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
              >
                {currentStep > index + 1 || isCompleted ? (
                  <span>
                    <MdCheckCircle size={40} />
                  </span>
                ) : (
                  ''
                )}
              </div>
              <p className="text-gray-500">{step}</p>
            </div>
          );
        })}
        {/* progress bar */}
        <div
          className="absolute top-1/4 left-0 h-[4px] bg-gray-300"
          style={{
            width: `calc(100% - ${margin.marginLeft + margin.marginRight}px)`,
            marginLeft: margin.marginLeft,
            marginRight: margin.marginRight,
          }}
        >
          <div
            className={`h-full bg-green-500`}
            style={{width: `${calculateProgressBarWidth()}%`}}
          ></div>
        </div>
      </div>
    </>
  );
}
