export default function FormInput({
  name,
  value,
  type,
  error,
  placeholder,
  onChange,
}) {
  return (
    <>
      <input
        className={`border rounded-xl shadow-inner p-2 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-600  ${
          error ? 'border-red-500 ' : ''
        }`}
        type={type || 'text'}
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm py-1">* {error}</p>}
    </>
  );
}
