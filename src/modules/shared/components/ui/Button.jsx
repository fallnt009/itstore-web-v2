export default function Button({type, text, className}) {
  return (
    <button type={type || 'text'} className={className}>
      {text}
    </button>
  );
}
