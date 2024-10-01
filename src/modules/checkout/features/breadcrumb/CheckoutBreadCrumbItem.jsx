import {useLocation} from 'react-router-dom';
import {MdCheck} from 'react-icons/md';

export default function CheckoutBreadCrumbItem({
  icon,
  title,
  targetPath,
  isVisited,
}) {
  const location = useLocation();
  const {pathname} = location;

  const isActive = pathname === targetPath;

  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <div
          className={`relative rounded-full text-white p-2 ${
            isActive ? ' bg-indigo-700' : 'bg-stone-300 text-stone-500'
          }`}
        >
          {isVisited ? <MdCheck size={25} /> : icon}
        </div>
        <h4 className={`text-stone-600 ${isActive ? 'font-bold' : ''}`}>
          {title}
        </h4>
      </div>
    </>
  );
}
