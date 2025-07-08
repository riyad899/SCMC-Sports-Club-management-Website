import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { router } from './router/router.jsx';
import { AuthProvider } from './Component/hooks/AuthContext.jsx';
import { CouponsProvider } from './Component/Context/CouponsContext.jsx';
import { RouterProvider } from 'react-router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Initialize React Query client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CouponsProvider>
          <RouterProvider router={router} />
        </CouponsProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
