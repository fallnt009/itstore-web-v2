import Blank from '../../../assets/images/product/productBlank.jpg';

export default function Image({src, alt, className, width, height}) {
  return (
    <img
      src={src || Blank}
      alt={alt}
      className={className}
      width={`${width}px`}
      height={`${height}px`}
    />
  );
}
