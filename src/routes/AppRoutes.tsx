import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/layouts/MainLayout/MainLayout';
import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import { HomePage } from '../pages/Home/HomePage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { SignInPage } from '../pages/SignIn/SignInPage';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
