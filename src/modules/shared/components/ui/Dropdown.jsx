import {useEffect, useRef} from 'react';

export default function Dropdown({children, setOpen}) {
  const dropdownEl = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownEl.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setOpen]);

  return (
    <div className="flex justify-end ">
      <div className="relative z-50" ref={dropdownEl}>
        {children}
      </div>
    </div>
  );
}
