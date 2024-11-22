import {useState} from 'react';
import SpecificationList from './list/SpecificationList';
export default function SpecContent({title, text}) {
  const [activeTab, setActiveTab] = useState(1);
  const menuTabs = [
    {id: 1, title: 'Over All', content: ''},
    {
      id: 2,
      title: 'Specification',
      content: <SpecificationList title={title} text={text} />,
    },
  ];
  //menu
  ///overall
  ///specification
  return (
    <div className="py-5">
      <div className="flex justify-center gap-10 border-b">
        {menuTabs.map((item) => (
          <button
            key={item.id}
            className={`font-bold text-xl px-5 pb-3 transition-all duration-300 ${
              activeTab === item.id
                ? 'text-indigo-600  border-b-4 border-b-indigo-600'
                : 'text-gray-800 border-b-4 border-transparent'
            }`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="py-3 text-base">
        {menuTabs.find((item) => item.id === activeTab)?.content}
      </div>
    </div>
  );
}
