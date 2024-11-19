import {Link} from 'react-router-dom';

export default function ActiveButton({
  select,
  to,
  activeTitle,
  inActiveTitle,
  onClick,
}) {
  return (
    <>
      {select ? (
        <Link
          to={to}
          className={`flex justify-center rounded-full border-2 py-4 px-5  border-indigo-700 text-white bg-indigo-700 font-semibold hover:bg-white hover:text-indigo-700`}
          onClick={onClick}
        >
          {activeTitle}
        </Link>
      ) : (
        <div className="flex justify-center rounded-full border-2 py-4 px-5  bg-stone-300 text-stone-500 font-semibold ">
          {inActiveTitle}
        </div>
      )}
    </>
  );
}
