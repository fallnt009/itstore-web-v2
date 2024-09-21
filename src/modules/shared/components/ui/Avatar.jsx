import blankImg from '../../../../assets/images/profile/blank.png';

export default function Avatar({src, size}) {
  return (
    <img
      src={src || blankImg}
      className={`rounded-full cursor-pointer `}
      alt="user"
      width={size}
      height={size}
    />
  );
}
