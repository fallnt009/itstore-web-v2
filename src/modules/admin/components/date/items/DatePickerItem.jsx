export default function DatePickerItem({selectedDate, onSubmit, onChange}) {
  return (
    <div className="flex items-center	gap-5 text-sm ">
      <div className=" text-gray-500">
        <h1 className="text-xs pb-1">Start Date</h1>
        <input
          className={`rounded-lg shadow-inner p-1 bg-gray-100 `}
          type="date"
          name="startDate"
          value={selectedDate.startDate || ''}
          onChange={onChange}
        />
      </div>
      <div className="text-gray-500">
        <h1 className="text-xs pb-1">End Date</h1>
        <input
          className="rounded-lg shadow-inner p-1 bg-gray-100"
          type="date"
          name="endDate"
          value={selectedDate.endDate || ''}
          onChange={onChange}
        />
      </div>
      <div>
        <button
          type="button"
          className="text-xs rounded-xl border p-2 px-4 font-semibold bg-blue-100 text-blue-500 hover:bg-gray-100 hover:text-gray-500"
          onClick={onSubmit}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
