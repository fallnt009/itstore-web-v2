export default function SalesProductContent() {
  return (
    <div>
      <div>
        <div className="py-5 border-b text-indigo-700">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl  font-semibold ">New Deals</h1>
            {/* <span>-</span> */}
          </div>
          {/* <div className="flex items-center text-base">
        <p>Total Items : {totalItems}</p>
      </div> */}
        </div>
      </div>
      <div className="grid grid-cols-[1fr_5fr]">
        <div className="border">{/* <SidebarFilter /> */}</div>
        <div className="border">
          <div className="border"></div>
          <div>items</div>
        </div>
      </div>
    </div>
  );
}
