import productBlank from '../../../assets/images/product/productBlank.jpg';

export default function Image({src, size}) {
  return (
    <img
      src={src || productBlank}
      className={`cursor-pointer hover:border-2 h-full object-contain`}
      alt="product"
      width={size}
      height={size}
    />
  );
}
