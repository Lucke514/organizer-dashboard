import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/pages/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import router from './router';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
