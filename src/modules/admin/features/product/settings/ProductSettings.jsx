import ToggleSwitch from '../../../../shared/components/ui/ToggleSwitch';

export default function ProductSettings({isActive, onToggleChange}) {
  return (
    <div className="py-5">
      <div className="flex justify-between border p-2 rounded-lg">
        <h1 className="font-semibold text-gray-500">Set Show</h1>
        <ToggleSwitch state={isActive} onToggleChange={onToggleChange} />
      </div>
    </div>
  );
}
