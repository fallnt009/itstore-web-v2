import {Outlet} from 'react-router-dom';

import AdminSidebar from './features/sidebar/AdminSidebar';

export default function AdminContainer() {
  return (
    <div className="grid grid-cols-[auto,1fr] border-t">
      <div className="border-r pt-5">
        <AdminSidebar />
      </div>
      <div className="pt-5 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}
