import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: FC = () => (
  <section>
    <h1 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Página não encontrada</h1>
    <p style={{ color: '#52606d', lineHeight: 1.6 }}>
      O recurso solicitado não existe. Verifique o endereço ou retorne para a página inicial.
    </p>
    <p style={{ marginTop: '1.5rem' }}>
      <Link to="/" style={{ color: '#1f6feb', fontWeight: 600 }}>
        Voltar para a home
      </Link>
    </p>
  </section>
);
