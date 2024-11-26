export default function TabFilterButton({title, icon, onClick}) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 bg-gray-500 bg-opacity-5 font-semibold p-1.5 px-4 rounded-lg hover:bg-opacity-20 transition-all duration-200"
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {title}
    </button>
  );
}
