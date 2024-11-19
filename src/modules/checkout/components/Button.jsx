export default function Button({type, className, children, onClick}) {
  return (
    <button type={type || 'button'} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
