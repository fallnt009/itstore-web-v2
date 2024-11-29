import {Outlet} from 'react-router-dom';

import AdminSidebar from './features/sidebar/AdminSidebar';

export default function AdminContainer() {
  return (
    <div className="grid grid-cols-[auto,1fr]">
      <div>
        <AdminSidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
