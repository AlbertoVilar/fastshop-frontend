import { FC, FormEvent, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../features/auth/AuthProvider';

type RedirectState = {
  from?: {
    pathname: string;
  };
};

export const SignInPage: FC = () => {
  const { isAuthenticated, login } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirectState = (location.state as RedirectState | null) ?? undefined;
  const nextPath = redirectState?.from?.pathname ?? '/dashboard';

  if (isAuthenticated) {
    return <Navigate to={nextPath} replace />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: conectar com fluxo real de autenticação
    if (email && password) {
      login();
    }
  };

  return (
    <section style={{ maxWidth: '420px' }}>
      <h1 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Entrar</h1>
      <p style={{ color: '#52606d', lineHeight: 1.6, marginBottom: '1.5rem' }}>
        Use o formulário abaixo para acessar o sistema. No futuro você pode integrar com a API real.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        noValidate
      >
        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontWeight: 600 }}>E-mail</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="seu@email.com"
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '0.375rem',
              border: '1px solid #cbd2d9',
            }}
            required
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontWeight: 600 }}>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="********"
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '0.375rem',
              border: '1px solid #cbd2d9',
            }}
            required
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: '#1f6feb',
            border: 'none',
            borderRadius: '0.375rem',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '0.75rem 1.5rem',
            fontWeight: 600,
          }}
        >
          Entrar
        </button>
      </form>
    </section>
  );
};
