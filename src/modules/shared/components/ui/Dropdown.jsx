import {useEffect, useRef} from 'react';

export default function Dropdown({children, isOpen, setOpen = false, style}) {
  const dropdownEl = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownEl.current && !dropdownEl.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setOpen]);

  return (
    <div
      className={`absolute z-50 transition-opacity duration-500 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      ref={dropdownEl}
      onMouseLeave={() => setOpen(false)}
      style={style}
    >
      {children}
    </div>
  );
}
