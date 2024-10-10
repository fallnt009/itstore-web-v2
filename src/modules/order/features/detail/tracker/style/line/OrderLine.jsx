export default function OrderLine({
  id,
  isCancel,
  currentStep,
  width,
  height,
  left,
  top,
  bottom,
}) {
  //add style and width
  return (
    <div
      className={`flex items-center relative z-0`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        top: `${top}px`,
        bottom: `${bottom}px`,
      }}
    >
      <div
        className={`flex-grow h-full ${
          isCancel
            ? 'bg-red-500'
            : currentStep >= id
            ? 'bg-green-500'
            : 'bg-gray-300'
        }`}
      ></div>
    </div>
  );
}
