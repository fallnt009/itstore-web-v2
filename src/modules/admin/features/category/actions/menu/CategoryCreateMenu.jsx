export default function CategoryCreateMenu({selected, onClick}) {
  const menuLists = [
    {id: 1, title: 'Brand'},
    {id: 2, title: 'Category'},
    {id: 3, title: 'Sub Category'},
    {id: 4, title: 'Tags'},
  ];
  return (
    <section className="flex gap-5 pt-4">
      {menuLists.map((item) => (
        <button
          type="button"
          className={`flex gap-2 border p-2 rounded-xl  hover:bg-blue-600 hover:text-white ${
            selected === item.id
              ? 'text-white bg-blue-600'
              : 'bg-blue-100 text-blue-600'
          }`}
          key={item.id}
          onClick={() => onClick(item.id)}
        >
          <h1>{item.title}</h1>
        </button>
      ))}
    </section>
  );
}
