import {useCallback, useRef, useState, useEffect} from 'react';
import {
  MdOutlineCalendarToday,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from 'react-icons/md';

import DatePickerItem from './items/DatePickerItem';

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState({
    startDate: '',
    endDate: '',
  });

  const [error, setError] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleToggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleDateSelect = useCallback(
    (e) => {
      const {name, value} = e.target;

      if (
        name === 'endDate' &&
        value &&
        selectedDate.startDate &&
        value < selectedDate.startDate
      ) {
        setError('End Date cannot earlier than Start Date');
        return;
      }

      setError('');
      //validate endDate cannot more than startDate
      setSelectedDate((prev) => ({...prev, [name]: value}));
    },
    [selectedDate.startDate]
  );

  return (
    <div ref={ref} className="relative">
      <div
        className="flex relative items-center gap-2 rounded-xl bg-gray-100 p-1.5 text-gray-500 text-sm border w-48 cursor-pointer hover:bg-blue-100 hover:text-blue-500"
        onClick={handleToggleOpen}
      >
        <span className="text-gray-700">
          <MdOutlineCalendarToday />
        </span>
        <h1 className="select-none">Jan 1 - Jan 30,2024</h1>
        <button className="text-gray-700">
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </div>
      <div
        className={`absolute bg-gray-50 rounded-xl p-4 border transition-opacity duration-500 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <DatePickerItem
          selectedDate={selectedDate}
          error={error}
          onChange={handleDateSelect}
        />
        {error && <p className="text-red-500 text-xs pt-1">* {error}</p>}
      </div>
    </div>
  );
}
