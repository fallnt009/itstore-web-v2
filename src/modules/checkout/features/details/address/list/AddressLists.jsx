import AddressListItem from './AddressListItem';

export default function AddressLists({address, selectedId, setSelectedId}) {
  return (
    <div className="flex flex-col gap-5">
      {address.map((el) => (
        <AddressListItem
          key={el.id}
          addressItem={el}
          selectedId={el.id === selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
}
