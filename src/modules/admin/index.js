import {Outlet} from 'react-router-dom';

import AdminSidebar from './features/sidebar/AdminSidebar';

export default function AdminContainer() {
  return (
    <div className="grid grid-cols-[1fr,6fr] border-t">
      <div className="border-r pt-5">
        <AdminSidebar />
      </div>
      <div className="mt-5 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}
