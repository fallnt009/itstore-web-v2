import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import MainLayout from '../modules/shared/layout/MainLayout';
import NotFoundPage from '../modules/not-found/NotFoundPage';

import {publicRoutes} from './publicRoutes';

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: publicRoutes,
      errorElement: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
