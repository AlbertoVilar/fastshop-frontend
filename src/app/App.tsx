import { FC } from 'react';
import { AppProviders } from './providers/AppProviders';
import { AppRoutes } from '../routes/AppRoutes';

const App: FC = () => (
  <AppProviders>
    <AppRoutes />
  </AppProviders>
);

export default App;
