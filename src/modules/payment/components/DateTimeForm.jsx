export default function DateTimeForm({input, onChange, error}) {
  //validate

  return (
    <div className="px-5 py-3">
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold">Select your payment date :</h1>
        <input
          className={`border p-2 px-4 shadow-inner rounded-lg focus:outline-none ${
            error ? 'border-red-500 ' : 'focus:border-indigo-600'
          }`}
          type="date"
          name="date"
          onChange={onChange}
          value={input.date}
          required
        />
        <h1 className="font-semibold">Select your payment time :</h1>
        <input
          className={`border p-2 px-4 shadow-inner rounded-lg focus:outline-none ${
            error ? 'border-red-500 ' : 'focus:border-indigo-600'
          }`}
          type="time"
          name="time"
          onChange={onChange}
          value={input.time}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
