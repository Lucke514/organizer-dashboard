import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/mainLayout';
import { Dashboard } from '@/pages/Dashboard';
import { Analytics } from '@/pages/Analytics';
import { Users } from '@/pages/Users';
import { Settings } from '@/pages/Settings';
import Profile from './pages/profile';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'analytics', element: <Analytics /> },
      { path: 'users/*', element: <Users /> },
      { path: 'settings', element: <Settings /> },
      { path: 'profile', element: <Profile /> },
    ],
  }
]);

export default router;
