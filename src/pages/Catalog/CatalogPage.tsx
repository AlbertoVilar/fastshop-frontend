import { FC } from 'react';
import { ProductList } from '../../components/ProductList';
import styles from './CatalogPage.module.css';

export const CatalogPage: FC = () => (
  <div className={styles.catalog}>
    <header className={styles.intro}>
      <h1 className={styles.title}>Catálogo FastShop</h1>
      <p className={styles.description}>
        Explore os produtos disponíveis na plataforma. Os preços e informações são fornecidos
        diretamente pelo backend em tempo real.
      </p>
    </header>

    <ProductList />
  </div>
);
