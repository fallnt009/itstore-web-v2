import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import MainLayout from '../modules/shared/layout/MainLayout';
import AuthLayout from '../modules/shared/layout/AuthLayout';
import NotFoundPage from '../modules/not-found/NotFoundPage';

import {publicRoutes} from './publicRoutes';
import {privateRoutes} from './privateRoutes';

import ProtectedRoute from '../modules/auth/features/authen/ProtectedRoute';

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: publicRoutes,
      errorElement: <NotFoundPage />,
    },
    {
      element: (
        <ProtectedRoute>
          <AuthLayout />
        </ProtectedRoute>
      ),
      children: privateRoutes,
      errorElement: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
