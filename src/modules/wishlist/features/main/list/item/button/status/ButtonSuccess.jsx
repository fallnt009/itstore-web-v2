import {MdCheck} from 'react-icons/md';

export default function ButtonSuccess() {
  return (
    <div className="flex gap-1 items-center py-2 px-4 border border-black hover:bg-slate-200">
      <div role="status">
        <MdCheck />
      </div>
      <h1>Added</h1>
    </div>
  );
}
