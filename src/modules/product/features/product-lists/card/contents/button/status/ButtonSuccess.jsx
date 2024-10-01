import {MdCheck} from 'react-icons/md';

export default function ButtonSuccess() {
  return (
    <div className="flex items-center gap-2 rounded-lg p-2 px-3 border border-indigo-600 bg-indigo-600 text-white font-semibold ">
      <div role="status">
        <MdCheck />
      </div>
      <h1>Added</h1>
    </div>
  );
}
