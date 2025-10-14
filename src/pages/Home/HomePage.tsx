import { FC } from 'react';
import { Link } from 'react-router-dom';

export const HomePage: FC = () => (
  <section>
    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Bem-vindo ao Fastshop Frontend</h1>
    <p style={{ color: '#52606d', lineHeight: 1.6 }}>
      Este é o ponto de partida do projeto. Use a navegação acima para acessar as telas principais.
    </p>
    <p style={{ marginTop: '1.5rem' }}>
      <Link to="/dashboard" style={{ color: '#1f6feb', fontWeight: 600 }}>
        Ir para o dashboard
      </Link>
    </p>
  </section>
);
