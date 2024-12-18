import ToggleSwitch from '../../../../shared/components/ui/ToggleSwitch';

export default function ProductSettings({isActive, onToggleChange}) {
  return (
    <div>
      <div className="pb-4">
        <h1 className="font-semibold">Settings</h1>
      </div>
      <div className="flex justify-between border p-2 rounded-lg">
        <h1 className="font-semibold text-gray-500">Set Active</h1>
        <ToggleSwitch state={isActive} onToggleChange={onToggleChange} />
      </div>
    </div>
  );
}
