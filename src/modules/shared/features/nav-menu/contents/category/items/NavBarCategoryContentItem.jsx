export default function NavBarCategoryContentItem({item, src, onClick, open}) {
  return (
    <div
      className={`box-border py-4  w-[170px] select-none bg-slate-100 text-gray-700 rounded-xl hover:bg-blue-100 hover:text-blue-600 cursor-pointer ${
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
        <div className="pt-2 font-semibold text-sm">{item.title}</div>
      </div>
    </div>
  );
}
