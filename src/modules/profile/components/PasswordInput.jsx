import {useState} from 'react';

import {IoMdEye, IoMdEyeOff} from 'react-icons/io';

export default function PasswordInput({
  name,
  value,
  onChange,
  error,
  maxLength,
  width = 'full',
  min,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <div className="relative">
        <input
          className={`rounded-lg border shadow-inner p-2 bg-gray-50 w-${width} focus:outline-none  ${
            error ? 'border-red-500 ' : 'focus:border-indigo-600'
          }`}
          type={isVisible ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          min={min}
        />
        <button
          type="button"
          className="absolute right-3 bottom-[8px] text-gray-500 cursor-pointer hover:text-indigo-700"
          onClick={toggleVisible}
        >
          {isVisible ? <IoMdEyeOff size={25} /> : <IoMdEye size={25} />}
        </button>
      </div>
      {error && <div className=" text-red-500">*{error}</div>}
    </>
  );
}
