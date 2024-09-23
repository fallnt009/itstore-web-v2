export default function SidebarFilterContentItem({item, onSelect, isChecked}) {
  console.log(item);
  console.log(isChecked);

  return (
    <div
      className="flex hover:text-indigo-600 items-center text-base px-2 gap-2"
      key={item.id}
    >
      <input
        type="checkbox"
        className="scale-150 cursor-pointer"
        checked={isChecked}
        onChange={(e) => onSelect(item, e.target.checked)}
      />
      {item.text}
    </div>
  );
}
