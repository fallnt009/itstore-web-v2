import AddressListItem from './AddressListItem';

export default function AddressLists({
  address,
  isDefault,
  selectedId,
  setSelectedId,
}) {
  return (
    <div className="flex flex-col gap-5">
      {address.map((el) => (
        <AddressListItem
          key={el.id}
          addressItem={el}
          isDefault={isDefault}
          selectedId={el.id === selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
}
