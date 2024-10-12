export default function OrderHistoryLoading() {
  return (
    <div className="animate-pulse py-10 px-10">
      <div className="flex">
        <div className="py-5">
          <div className="bg-gray-200 h-8 w-80"></div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_3fr]">
        <div className="bg-gray-200 h-[800px] w-80"></div>

        <div className="bg-gray-200 h-[800px] "></div>
      </div>
    </div>
  );
}
