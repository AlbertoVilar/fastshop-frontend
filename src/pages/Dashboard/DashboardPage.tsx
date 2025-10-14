import { FC } from 'react';
import { useAuth } from '../../features/auth/AuthProvider';

export const DashboardPage: FC = () => {
  const { logout } = useAuth();

  return (
    <section>
      <h1 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Dashboard</h1>
      <p style={{ color: '#52606d', lineHeight: 1.6 }}>
        Esta área é protegida e deve ser acessível somente para usuários autenticados.
      </p>
      <button
        type="button"
        onClick={logout}
        style={{
          marginTop: '1.5rem',
          backgroundColor: '#ef4444',
          border: 'none',
          borderRadius: '0.375rem',
          color: '#ffffff',
          cursor: 'pointer',
          padding: '0.75rem 1.5rem',
          fontWeight: 600,
        }}
      >
        Sair
      </button>
    </section>
  );
};
