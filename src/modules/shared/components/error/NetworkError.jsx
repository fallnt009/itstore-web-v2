import {MdErrorOutline} from 'react-icons/md';

export default function NetworkError() {
  return (
    <div className="px-10 py-40">
      <div className="flex flex-col justify-center items-center">
        <span className="py-2 text-indigo-600">
          <MdErrorOutline size={150} />
        </span>
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-semibold  text-4xl text-indigo-600">Whoops!</h1>
          <h1 className="font-semibold text-4xl text-indigo-800">
            Something went wrong!
          </h1>
          <div className="flex flex-col justify-center items-center py-4 gap-2 text-gray-500 ">
            <p>Please either refresh the page or return home to try again.</p>
          </div>
        </div>
        <div className="py-4"></div>
      </div>
    </div>
  );
}
