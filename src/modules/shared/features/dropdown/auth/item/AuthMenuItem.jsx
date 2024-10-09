export default function AuthMenuItem({icon, onClick, title}) {
  return (
    <button
      type="button"
      className="flex gap-2 p-2 rounded-md hover:bg-slate-200  items-center w-full"
      onClick={onClick}
    >
      <span className="rounded-full bg-indigo-700 text-white p-2">{icon}</span>
      <p className="text-sm font-regular">{title}</p>
    </button>
  );
}
