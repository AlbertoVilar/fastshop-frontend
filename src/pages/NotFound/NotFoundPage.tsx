import { FC } from 'react';
import { Button } from '../../components/ui/Button';
import styles from './NotFoundPage.module.css';

export const NotFoundPage: FC = () => (
  <section className={styles.wrapper}>
    <span className={styles.badge}>Erro 404</span>
    <h1 className={styles.title}>Conteudo nao encontrado</h1>
    <p className={styles.text}>
      Nao encontramos a pagina que voce procura. Revise o endereco digitado ou explore as ofertas e
      categorias disponiveis na FastShop.
    </p>
    <div className={styles.actions}>
      <Button as="a" href="/" variant="primary">
        Voltar para a home
      </Button>
      <Button as="a" href="/sign-in" variant="outline">
        Fazer login
      </Button>
    </div>
  </section>
);
