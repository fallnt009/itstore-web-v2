export default function ProductCardButtonContent() {
  return (
    <button
      type="button"
      className="flex gap-2 rounded-lg p-2 border border-indigo-600 bg-indigo-600 text-white font-semibold hover:text-indigo-600 hover:bg-white"
    >
      <div role="status">
        {/* <svg
          aria-hidden="true"
          className="animate-spin h-5 w-5 text-gray-200 dark:text-gray-100 border-4 border-white border-l-transparent border-t-transparent rounded-full"
          viewBox="0 0 24 24"
        ></svg> */}
      </div>
      <h1>Add to Cart</h1>
    </button>
  );
}
