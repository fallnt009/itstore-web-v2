//Main Layout

<main className="container pb-5">
  <header className="flex items-center  justify-between text-2xl font-semibold px-5 py-5">
    <h1>Order Lists</h1>
  </header>
  <section className="bg-white mx-5 px-5 rounded-xl">
    <article className="py-5">Content Layout</article>
  </section>
</main>;

//Content Layout

<main className="container">
  <section className="flex pb-5">
    {/* <DatePicker dates={dates} onSubmit={onSubmitDate} /> */}
  </section>
  <section className="flex items-center justify-between">
    {/* <AdminOrderContentTab onToggle={onToggleFilters} />
        <OrderContentFilters /> */}
  </section>
  <section className="py-5">
    <div className="overflow-auto rounded-lg shadow">
      {/* <OrderContentTable items={items} /> */}
    </div>
  </section>
  <section className="flex justify-end">
    {/* <ParginationIndicator
          page={page}
          totalPages={totalPages}
          handleChange={onChangePage}
        /> */}
  </section>
</main>;

//Order Details
<main className="container bg-white mb-5">
  <header className="flex gap-3 items-center text-2xl font-semibold px-5 py-5">
    <h1>Order No# 333112133</h1>
    <span>{/* <PaymentStatus /> */}</span>
    <span>{/* <ReviewStatus /> */}</span>
  </header>
  <div className="grid grid-cols-[2fr_1.5fr] gap-5 mx-5">
    <section className="bg-white flex flex-col gap-5">
      <article className="border-2 rounded-xl">
        <div className="flex flex-col gap-3 px-3 pt-5">
          <h1 className="font-semibold text-lg">Order Item</h1>
          <span>{/* <ReviewStatus /> */}</span>
          <p className="text-gray-600 text-sm">
            Use this to personalized guide to get your store up and running.
          </p>
        </div>
        <div className="my-2 px-3">
          <div className="overflow-y-auto h-[180px]">
            {/* <ProductCardHorizontal />
                <ProductCardHorizontal />
                <ProductCardHorizontal />
                <ProductCardHorizontal />
                <ProductCardHorizontal />
                <ProductCardHorizontal />
                <ProductCardHorizontal /> */}
          </div>
        </div>
        <div className="flex justify-between items-center bg-gray-100 py-4 text-gray-700 px-5 text-sm">
          <p>Effortlessly manage your orders</p>
          <div className="flex gap-5 font-medium text-sm">
            <button className="border p-2 px-3 rounded-lg bg-white border-gray-700">
              Review items
            </button>
            <button className="border p-2 px-3 rounded-lg bg-indigo-500 border-gray-700 text-white">
              Create label
            </button>
          </div>
        </div>
      </article>
      <article className="border-2 rounded-xl">
        <div className="flex flex-col gap-3 px-3 pt-5">
          <h1 className="font-semibold text-lg">Order Summary</h1>
          <span>{/* <PaymentStatus /> */}</span>
          <p className="text-gray-600 text-sm">
            Use this to personalized guide to get your store up and running.
          </p>
        </div>
        <div className="my-2 px-3 text-gray-600 text-sm">
          <div className="flex flex-col gap-2 py-3 border-b">
            <div className="flex justify-between">
              <h1>Subtotal</h1>
              {/* <NumericFormat
                    value="1100"
                    displayType="text"
                    thousandSeparator=","
                    prefix={'฿'}
                  /> */}
            </div>
            <div className="flex justify-between">
              <h1>Delivery Fee</h1>
              {/* <NumericFormat
                    value="35"
                    displayType="text"
                    thousandSeparator=","
                    prefix={'฿'}
                  /> */}
            </div>
            <div className="flex justify-between">
              <h1>Vat 7%</h1>
              {/* <NumericFormat
                    value="400"
                    displayType="text"
                    thousandSeparator=","
                    prefix={'฿'}
                  /> */}
            </div>
            <div className="font-semibold text-black flex justify-between">
              <h1>Total</h1>
              {/* <NumericFormat
                    value="1535"
                    displayType="text"
                    thousandSeparator=","
                    prefix={'฿'}
                  /> */}
            </div>
          </div>
          <div className="py-3 flex justify-between">
            <h1>Paid by customer</h1>
            {/* <NumericFormat
                  value="1535"
                  displayType="text"
                  thousandSeparator=","
                  prefix={'฿'}
                /> */}
          </div>
        </div>
        <div className="flex justify-between items-center bg-gray-100 py-4 text-gray-700 px-5 text-sm">
          <p>Effortlessly manage your orders</p>
          <div className="flex gap-5 font-medium text-sm">
            <button className="border p-2 px-3 rounded-lg bg-white border-gray-700">
              Send invoice
            </button>
            <button className="border p-2 px-3 rounded-lg bg-indigo-500 border-gray-700 text-white">
              Collect Payment
            </button>
          </div>
        </div>
      </article>
      <article className="border-2 rounded-xl">
        <div className="flex flex-col gap-3 px-3 pt-5">
          <h1 className="font-semibold text-lg">Employee Only</h1>
          <p className="text-gray-600 text-sm">
            Use this to personalized guide to get your store up and running.
          </p>
        </div>
        <div className="my-2 px-3 text-gray-600 text-sm">
          show id and person now
        </div>

        <div className="flex justify-between items-center bg-gray-100 py-4 text-gray-700 px-5 text-sm">
          <p>Effortlessly manage your orders</p>
          <div className="flex gap-5 font-medium text-sm">
            <button className="border p-2 px-3 rounded-lg bg-indigo-500 border-gray-700 text-white">
              Verify order
            </button>
          </div>
        </div>
      </article>
    </section>
    <section className="bg-white flex flex-col gap-5">
      <article className="border-2 rounded-xl">
        <div className="flex flex-col gap-3 px-3 pt-5">
          <h1 className="font-semibold text-lg">Contact Information</h1>
        </div>
        <div className="my-5 px-3 text-gray-600 text-sm">
          user that order email and phone number
        </div>
      </article>
      <article className="border-2 rounded-xl">
        <div className="flex items-center justify-between gap-3 px-3 pt-5">
          <h1 className="font-semibold text-lg">Shipping Address</h1>
          <button type="button" className="text-gray-500">
            {/* <MdEdit /> */}
          </button>
        </div>
        <div className="my-5 px-3 text-gray-600 text-sm">Address</div>
      </article>
      <article className="border-2 rounded-xl">
        <div className="flex items-center justify-between gap-3 px-3 pt-5">
          <h1 className="font-semibold text-lg">Billing Address</h1>
          <button type="button" className="text-gray-500">
            {/* <MdEdit /> */}
          </button>
        </div>
        <div className="my-5 px-3 text-gray-600 text-sm">Address</div>
      </article>
    </section>
  </div>
</main>;
