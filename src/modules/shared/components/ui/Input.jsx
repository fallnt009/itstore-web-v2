export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
  maxLength,
  width = 'full',
  min,
}) {
  return (
    <>
      <input
        className={`rounded-lg border shadow-inner p-2 bg-gray-50 w-${width} focus:outline-none  ${
          error ? 'border-red-500 ' : 'focus:border-indigo-600'
        }`}
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        min={min}
      />
      {error && <div className=" text-red-500">{error}</div>}
    </>
  );
}
