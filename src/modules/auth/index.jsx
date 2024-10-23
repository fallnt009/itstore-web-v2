import {Outlet} from 'react-router-dom';

export default function AuthContainer() {
  //grid half logo and paragraph
  //another half change between login and register
  return (
    <div className="grid grid-cols-2 mt-20 mb-20 text-indigo-700">
      <div className="grid grid-cols-subgrid p-4 text-center self-center ">
        <div className="block font-extrabold text-5xl font-jetmono ">
          ITStores
        </div>

        <div className="mt-3 text-gray-600">
          <p>Welcome all Customers to Our Login Page</p>
        </div>
      </div>
      <div className="grid grid-cols-subgrid p-4 self-center">
        <Outlet />
      </div>
    </div>
  );
}
