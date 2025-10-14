import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../features/auth/AuthProvider';

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => (
  <BrowserRouter>
    <AuthProvider>{children}</AuthProvider>
  </BrowserRouter>
);
