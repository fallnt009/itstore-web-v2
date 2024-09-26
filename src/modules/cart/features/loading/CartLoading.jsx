export default function CartLoading({cartItems}) {
  return (
    <div className="animate-pulse grid grid-cols-[3fr_2fr]">
      {/* ITEM LENGTH */}
      <div className="p-2">
        <div className="p-4 px-5 bg-gray-200"></div>
        <div className="overflow-y-auto max-h-[75vh]">
          {cartItems.length > 0 ? (
            cartItems?.map((item) => (
              <div className="grid grid-cols-[1fr_4fr] p-5" key={item.id}>
                <div className="bg-gray-200 h-[100px] w-[100px]"></div>
                <div className=" h-full px-5">
                  <div className="flex justify-between">
                    <div className="bg-gray-200 px-40 py-3"></div>
                    <div className="bg-gray-200 px-20 py-3"></div>
                  </div>
                  <div className="flex py-2">
                    <div className="flex bg-gray-200 px-20 py-3 "></div>
                  </div>
                  <div className="flex py-1">
                    <div className="flex bg-gray-200 px-40 py-4"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="grid grid-cols-[1fr_4fr] p-5">
              <div className="bg-gray-200 h-[100px] w-[100px]"></div>
              <div className=" h-full px-5">
                <div className="flex justify-between">
                  <div className="bg-gray-200 px-40 py-3"></div>
                  <div className="bg-gray-200 px-20 py-3"></div>
                </div>
                <div className="flex py-2">
                  <div className="flex bg-gray-200 px-20 py-3 "></div>
                </div>
                <div className="flex py-1">
                  <div className="flex bg-gray-200 px-40 py-4"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* proceed to check out */}
      <div className="p-4">
        <div className="px-7 py-52 bg-gray-200"></div>
      </div>
    </div>
  );
}
