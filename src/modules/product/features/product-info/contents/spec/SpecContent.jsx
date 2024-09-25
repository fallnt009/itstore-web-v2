import SpecContentList from './SpecContentList';

export default function SpecContent({title, text}) {
  return (
    <div className="py-5">
      <h1 className="text-3xl text-gray-600 font-semibold py-2">
        Specification
      </h1>
      <div className="py-3 text-base">
        <SpecContentList title={title} text={text} />
      </div>
    </div>
  );
}
