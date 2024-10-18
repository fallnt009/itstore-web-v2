import blankImg from '../../../../assets/images/profile/blank.png';

export default function Avatar({src, size}) {
  return (
    <img
      src={src || blankImg}
      className={`rounded-full cursor-pointer object-cover`}
      alt="ava"
      style={{width: `${size}px`, height: `${size}px`}}
    />
  );
}
