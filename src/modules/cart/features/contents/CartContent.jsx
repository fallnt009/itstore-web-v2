import CartContentItem from './CartContentItem';
import CartSummary from '../summary/CartSummary';
import CartEmpty from '../CartEmpty';

export default function CartContent({cartItems, onQtyChange, onDelete}) {
  const totalItems = cartItems?.reduce((total, item) => total + item.qty, 0);
  //render empty page
  if (!cartItems || cartItems.length === 0) {
    return <CartEmpty />;
  }
  return (
    <>
      <div className="grid grid-cols-[3fr_2fr]">
        {/* ITEM LENGTH */}
        <div className="p-2">
          {/* need to fix cart items total */}
          {totalItems > 1 ? (
            <p className="px-5 p-2 text-stone-500">
              {totalItems} items in total
            </p>
          ) : (
            <p className="px-5 p-2 text-stone-500">
              {totalItems} item in total
            </p>
          )}
          <div className="overflow-y-auto scrollbar-thin max-h-[75vh]">
            {cartItems?.map(
              (el) =>
                el?.id && (
                  <CartContentItem
                    key={el.id}
                    item={el}
                    onQtyChange={onQtyChange}
                    onDelete={onDelete}
                    limit={10}
                  />
                )
            )}
          </div>
        </div>
        {/* proceed to check out */}
        <div>
          <CartSummary cart={cartItems} totalItem={totalItems} />
        </div>
      </div>
    </>
  );
}
