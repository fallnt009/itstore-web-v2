export default function HelpCenterGetInfo() {
  const infoLists = [
    {id: 1, title: 'Order'},
    {id: 2, title: 'Payment'},
    {id: 2, title: 'Parcel Services'},
    {id: 2, title: 'Warranty'},
  ];
  return (
    <div className="py-10 px-24">
      <div>
        <h1 className="text-2xl font-semibold">Get more Information</h1>
      </div>
      <div className="flex gap-4 py-5">
        {infoLists.map((info) => (
          <div
            className="p-4 border rounded-lg cursor-pointer hover:bg-slate-100 hover:border-indigo-700"
            key={info.id}
          >
            <h1 className="font-semibold">{info.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
