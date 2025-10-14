import { FC, useEffect, useState } from 'react';
import { fetchProducts, type ApiError, type Product } from '../../services/productService';
import styles from './ProductList.module.css';

export const ProductList: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      setIsLoading(true);

      try {
        const productList = await fetchProducts();
        if (isMounted) {
          setProducts(productList);
          setErrorMessage(null);
        }
      } catch (error) {
        let message = 'Não foi possível carregar os produtos.';
        if (error instanceof Error) {
          const details = (error as Error & { details?: ApiError }).details;
          message = details?.message ?? error.message ?? message;
        }
        if (isMounted) {
          setErrorMessage(message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <section className={styles.wrapper} aria-busy="true" aria-labelledby="product-list-heading">
        <h2 className={styles.heading} id="product-list-heading">
          Produtos
        </h2>
        <p className={styles.status}>Carregando produtos...</p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section
        className={styles.wrapper}
        aria-live="polite"
        aria-labelledby="product-list-heading"
      >
        <h2 className={styles.heading} id="product-list-heading">
          Produtos
        </h2>
        <p className={styles.status} role="alert">
          {errorMessage}
        </p>
      </section>
    );
  }

  return (
    <section className={styles.wrapper} aria-labelledby="product-list-heading">
      <h2 className={styles.heading} id="product-list-heading">
        Produtos
      </h2>
      {products.length === 0 ? (
        <p className={styles.status}>Nenhum produto disponível.</p>
      ) : (
        <ul className={styles.grid}>
          {products.map((product) => (
            <li className={styles.item} key={product.id}>
              <h3 className={styles.itemTitle}>{product.name}</h3>
              <p className={styles.itemPrice}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(product.price)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
