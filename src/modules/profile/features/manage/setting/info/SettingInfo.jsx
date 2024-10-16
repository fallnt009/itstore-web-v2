import Input from '../../../../../shared/components/ui/Input';

export default function SettingInfo() {
  return (
    <div className="flex flex-col gap-3 pt-5">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <form>
            <div className="border-b pb-5">
              <h1 className="font-semibold py-2">Full Name</h1>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <h1 className="text-sm text-gray-500 font-semibold pb-1">
                    First Name
                  </h1>
                  <Input name="First Name" type="text" />
                </div>
                <div>
                  <h1 className="text-sm text-gray-500 font-semibold pb-1">
                    Last Name
                  </h1>
                  <Input name="Last Name" type="text" />
                </div>
              </div>
            </div>
            <div className="border-b pb-5 pt-3">
              <h1 className="font-semibold">Contact Email</h1>
              <p className="text-gray-500">
                Manage your accounts email address.
              </p>
              <div className="flex py-2">
                <div className="w-1/2">
                  <h1 className="text-sm text-gray-500 font-semibold pb-1">
                    Email
                  </h1>
                  <Input name="Email" type="email" />
                </div>
                {/* <button /> */}
              </div>
            </div>
            <div className="border-b pb-5 pt-3">
              <h1 className="font-semibold">Password</h1>
              <p className="text-gray-500">Modify your current password.</p>
              <div className="grid grid-cols-2 gap-5 py-2">
                <div>
                  <h1 className="text-sm text-gray-500 font-semibold pb-1">
                    Current password
                  </h1>
                  <Input name="Current Password" type="password" />
                </div>
                <div>
                  <h1 className="text-sm text-gray-500 font-semibold pb-1">
                    New password
                  </h1>
                  <Input name="New Password" type="password" />
                </div>
              </div>
            </div>
            <div className="border-b pb-5 pt-3">
              <h1 className="font-semibold">Phone Number</h1>
              <p className="text-gray-500">Modify your current phone number.</p>
              <div className="grid grid-cols-2 gap-5 py-2">
                <div>
                  <h1 className="text-sm text-gray-500 font-semibold pb-1">
                    Phone Number
                  </h1>
                  <Input name="Current Password" type="password" />
                </div>
              </div>
            </div>

            {/* <h1>Phone Number</h1>
            <Input name="Phone Number" type="text" /> */}
          </form>
        </div>
        <div>
          <button
            type="button"
            className="text-sm font-semibold bg-indigo-700 text-white border rounded-lg p-2 px-4 hover:border-indigo-700 hover:bg-white hover:text-indigo-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
