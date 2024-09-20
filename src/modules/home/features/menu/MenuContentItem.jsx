import {MdArrowRight} from 'react-icons/md';
import {Link} from 'react-router-dom';

export default function MenuContentItem({title, src, size, url}) {
  return (
    <div className="grid grid-rows-2 p-4 gap-2 text-indigo-700">
      <div className="row-span-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Link to={url}>
          <p className="flex items-center cursor-pointer">
            Shop now
            <span>
              <MdArrowRight />
            </span>
          </p>
        </Link>
      </div>
      <div className="row-span-1 flex justify-center">
        <img
          alt="imgpreview"
          src={src || ''}
          style={{width: `${size}px`, height: `${size}px`}}
          className={`object-contain bg-transparent`}
        />
      </div>
    </div>
  );
}
