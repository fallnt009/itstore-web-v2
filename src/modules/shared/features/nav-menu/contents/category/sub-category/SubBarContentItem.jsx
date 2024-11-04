import {Link} from 'react-router-dom';

export default function SubBarContentItem({item, src, onClose}) {
  return (
    <Link
      className="p-2 select-none bg-slate-100 rounded-lg hover:bg-blue-100 cursor-pointer"
      to={`/products${item.pathname}`}
      onClick={onClose}
    >
      <div className="flex gap-4 justify-start items-center">
        <div>
          <img
            alt="navbaricon"
            src={src}
            style={{width: `40px`, height: `40px`}}
            loading="lazy"
          />
        </div>
        <div className="font-semibold text-gray-700">{item.title}</div>
      </div>
    </Link>
  );
}
