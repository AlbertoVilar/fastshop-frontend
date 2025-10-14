import { FC } from 'react';
import { PrimaryButton, SecondaryButton } from '../../components/buttons';
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
      <PrimaryButton as="a" href="/">
        Voltar para a home
      </PrimaryButton>
      <SecondaryButton as="a" href="/sign-in">
        Fazer login
      </SecondaryButton>
    </div>
  </section>
);
