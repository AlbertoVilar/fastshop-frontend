import { FC, FormEvent, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { PrimaryButton } from '../../components/buttons';
import { useAuth } from '../../features/auth/AuthProvider';
import styles from './SignInPage.module.css';

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

    if (email && password) {
      login();
    }
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <header>
          <h1 className={styles.title}>Entrar</h1>
          <p className={styles.subtitle}>
            Acesse sua conta FastShop e acompanhe pedidos, listas e recomendacoes personalizadas.
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <div className={styles.labelRow}>
              <label className={styles.label} htmlFor="email">
                E-mail
              </label>
              <button type="button" className={styles.link}>
                Esqueci o e-mail
              </button>
            </div>
            <input
              id="email"
              className={styles.input}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seu@email.com"
              required
              autoComplete="email"
            />
          </div>

          <div className={styles.field}>
            <div className={styles.labelRow}>
              <label className={styles.label} htmlFor="password">
                Senha
              </label>
              <button type="button" className={styles.link}>
                Esqueci a senha
              </button>
            </div>
            <input
              id="password"
              className={styles.input}
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="********"
              required
              autoComplete="current-password"
            />
          </div>

          <PrimaryButton type="submit" fullWidth>
            Entrar
          </PrimaryButton>
        </form>

        <p className={styles.footerText}>
          Ainda nao tem conta?{' '}
          <Link to="/sign-up" className={styles.link}>
            Criar conta
          </Link>
        </p>
      </section>
    </div>
  );
};
