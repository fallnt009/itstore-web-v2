import {useEffect, useState} from 'react';

export default function DateTimeForm({onSubmit}) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');

  const utcDateTimeString =
    date && time ? new Date(`${date}T${time}:00`).toISOString() : null;

  // Check if the selected date is today or in the future
  const selectedDate = new Date(`${date}T${time}:00`);
  const currentDate = new Date();
  //validate
  const validateInputs = () => {
    if (!date || !time) {
      setError('Please select both date and time.');
      return false;
    }
    if (selectedDate < currentDate) {
      setError('Please select a future date and time.');
      return false;
    }

    setError(''); // Clear state
    return true;
  };

  //handle Submit to hook
  useEffect(() => {
    if (utcDateTimeString && validateInputs()) {
      onSubmit(utcDateTimeString);
    }
  }, [utcDateTimeString, onSubmit]);

  return (
    <div className="px-5 py-3">
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold">Select your payment date :</h1>
        <input
          className="border p-2 px-4 rounded-lg"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <h1 className="font-semibold">Select your payment time :</h1>
        <input
          className="border p-2 px-4 rounded-lg"
          type="time"
          onChange={(e) => setTime(e.target.value)}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
