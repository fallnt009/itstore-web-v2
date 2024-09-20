export default function NavSelectMainButton({item, src, onSelect}) {
  const {title} = item || '';

  return (
    <div className="px-5 select-none">
      <div
        className="flex flex-col cursor-pointer"
        onClick={() => onSelect(item)}
      >
        <div>
          <div className="flex justify-center items-center bg-slate-200 rounded-full w-32 h-32 hover:shadow-xl">
            <img
              alt="navbaricon"
              src={src}
              style={{width: `85px`, height: `85px`}}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex justify-center pt-2 text-center">
          <h1 className="text-gray-700 font-semibold hover:underline text-sm">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
