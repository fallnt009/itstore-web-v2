export default function SpecContentListItem({item}) {
  const data = item.SpecProduct;

  return (
    <div className="flex items-center gap-2">
      {item.value && (
        <div className="flex gap-1 items-center">
          <h4>{item.value}</h4>
          <span className="flex justify-center items-center">x</span>
        </div>
      )}
      <h4>{data.text}</h4>
    </div>
  );
}
