export default function NavBarCategoryContentItem({item, src, onClick, open}) {
  return (
    <div
      className={`p-2 py-8 select-none bg-slate-100 rounded-lg hover:bg-blue-100 cursor-pointer ${
        open ? 'bg-blue-100' : ''
      } `}
      onClick={() => onClick(item.id)}
    >
      <div className="flex flex-col justify-center items-center">
        <div>
          <img
            alt={item.title}
            src={src}
            style={{width: `60px`, height: `60px`}}
            loading="lazy"
          />
        </div>
        <div className="pt-2 font-semibold text-gray-700">{item.title}</div>
      </div>
    </div>
  );
}
