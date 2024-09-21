export default function TextArea({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
  rows,
  width = 'full',
}) {
  return (
    <>
      <textarea
        className={`rounded-lg border shadow-inner p-2 bg-gray-50 w-${width} focus:outline-none  ${
          error ? 'border-red-500 ' : 'focus:border-indigo-600'
        }`}
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
      />
      {error && <div className=" text-red-500">*{error}</div>}
    </>
  );
}
