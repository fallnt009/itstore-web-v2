import {useCallback, useEffect, useState} from 'react';

export default function ToggleSwitch({state = false, onToggleChange}) {
  const [isToggle, setIsToggle] = useState(state);

  //get isActive useEffect if isActive already on
  useEffect(() => {
    setIsToggle(state);
  }, [state]);

  const handleOnClickToggle = useCallback(() => {
    setIsToggle((prevState) => {
      const newState = !prevState;

      onToggleChange(newState);
      return newState;
    });
  }, [onToggleChange]);

  return (
    <div className="flex gap-3">
      <div
        className={`flex w-12 border p-1 rounded-2xl  cursor-pointer ${
          isToggle ? 'bg-green-500' : 'bg-red-500'
        }`}
        onClick={handleOnClickToggle}
      >
        <span
          className={`rounded-full h-4 w-4 bg-white transition-transform  ${
            isToggle ? 'translate-x-6' : 'translate-x-0'
          }`}
        ></span>
      </div>
      <div>
        <p className="text-gray-500">{isToggle ? 'ON' : 'OFF'}</p>
      </div>
    </div>
  );
}
