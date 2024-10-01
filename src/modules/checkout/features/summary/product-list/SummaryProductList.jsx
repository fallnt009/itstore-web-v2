import SummaryProductListItem from './SummaryProductListItem';

export default function SummaryProductList({userCart}) {
  return (
    <div className="flex flex-col gap-1 border-t-2 py-4 ">
      <h4 className="font-semibold">Products</h4>
      <div className="overflow-y-auto h-72">
        {userCart.map((el) => (
          <SummaryProductListItem
            key={el.id}
            product={el.Product}
            qty={el.qty}
          />
        ))}
      </div>
    </div>
  );
}
