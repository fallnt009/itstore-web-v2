export default function ProductListLoading() {
  return (
    <div className="grid gap-4 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {Array.from({length: 8}).map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 animate-pulse h-40 rounded-md"
        ></div>
      ))}
    </div>
  );
}
