import {MdMail, MdLocalPhone} from 'react-icons/md';

export default function HelpCenterGetSupport() {
  const supportLists = [
    {
      id: 1,
      title: 'Contact Us',
      icon: <MdMail size={25} />,
      text1: 'send to ours email at',
      text2: 'itstoreweb@gmail.com',
    },
    {
      id: 2,
      title: 'Call Us',
      icon: <MdLocalPhone size={25} />,
      text1:
        'Our phone team is available at Monday through Friday between 7am - 7pm CST. We are closed on weekends and holidays.',
      text2: 'Number: +1111112213',
    },
  ];
  return (
    <div className="py-10 px-24">
      <div>
        <h1 className="text-2xl font-semibold">Get Support</h1>
      </div>
      <div className="grid grid-cols-3 py-5 gap-10">
        {supportLists.map((list) => (
          <div className="border rounded-lg" key={list.id}>
            <div className="flex items-center gap-2 p-4">
              <span className="text-indigo-700">{list.icon}</span>
              <h1 className="font-semibold">{list.title}</h1>
            </div>
            <div className="border-b"></div>
            <div className="p-4 text-gray-500">
              <div>
                {list.text1}
                <p className="font-semibold">{list.text2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
