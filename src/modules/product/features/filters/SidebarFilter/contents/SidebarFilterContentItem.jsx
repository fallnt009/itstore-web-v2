export default function SidebarFilterContentItem({item, onSelect, isChecked}) {
  return (
    <div
      className="flex hover:text-indigo-600 items-center text-base px-2 py-2.5 gap-2"
      key={item.id}
    >
      <input
        type="checkbox"
        className="scale-150 cursor-pointer"
        checked={isChecked}
        onChange={() => onSelect(item, !isChecked)}
      />
      {item.text}
    </div>
  );
}
