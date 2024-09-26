import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import MainLayout from '../modules/shared/layout/MainLayout';
import NotFoundPage from '../modules/not-found/NotFoundPage';

import {publicRoutes} from './publicRoutes';
import {privateRoutes} from './privateRoutes';

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: publicRoutes,
      errorElement: <NotFoundPage />,
    },
    {
      element: <MainLayout />,
      children: privateRoutes,
      errorElement: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
