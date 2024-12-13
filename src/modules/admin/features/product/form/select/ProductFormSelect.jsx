export default function ProductFormSelect({brands, brandError, onChange}) {
  if (brandError) {
    return <div>Brand Not Avaliable</div>;
  }

  return (
    <>
      <h1 className="font-semibold">Select Product Brand</h1>

      <select
        className="p-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500  bg-slate-100 font-semibold cursor-pointer"
        onChange={(e) => onChange(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          Choose Brand
        </option>
        {brands.length > 0 ? (
          brands.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No brands available
          </option>
        )}
      </select>
    </>
  );
}
