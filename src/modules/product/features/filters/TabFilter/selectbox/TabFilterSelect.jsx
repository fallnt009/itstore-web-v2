export default function TabFilterSelect() {
  return (
    <select className="flex items-center gap-2 bg-blue-600 text-blue-700 bg-opacity-10 font-semibold p-1.5 px-3 rounded-lg hover:bg-opacity-20 transition-all duration-200 focus:outline-none">
      <option className="bg-white font-semibold text-black">High Price</option>
      <option className="bg-white font-semibold text-black">Low Price</option>
    </select>
  );
}
