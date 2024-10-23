import WishlistListItem from './item/WishlistListItem';

export default function WishlistList({wishlist}) {
  return (
    <div className="grid grid-cols-2 gap-5 px-5">
      {wishlist.map((item) => (
        <div key={item.id}>
          <WishlistListItem item={item} />
        </div>
      ))}
    </div>
  );
}
