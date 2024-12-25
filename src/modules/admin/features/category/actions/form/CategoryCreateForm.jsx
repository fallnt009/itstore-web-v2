import FormInput from '../../../../components/FormInput';

export default function CategoryCreateForm() {
  return (
    <div>
      <h1 className="font-semibold text-lg">Basic Information</h1>
      <form className="flex gap-5 pt-4">
        <FormInput placeholder="title" />
        <button
          type="button"
          className="p-2 px-4 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white"
        >
          <h1 className="font-semibold">Submit</h1>
        </button>
      </form>
    </div>
  );
}
