export default function SideDrawer({children, isOpen, onClose}) {
  return (
    <main
      className={
        'fixed overflow-hidden z-50  bg-opacity-25 inset-0 trasform ease-in-out' +
        (isOpen
          ? 'transition-opacity opacity-100 duration-500 translate-x-0'
          : 'transition-all delay-500 opacity-0 translate-x-full')
      }
    >
      <section
        className={
          'w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all' +
          (isOpen ? 'translate-x-0' : 'translate-x-full')
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {children}
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={onClose}
      ></section>
    </main>
  );
}
