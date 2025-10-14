import { FC, useEffect, useMemo, useState } from 'react';
import {
  fetchProducts,
  type ApiError,
  type Product,
} from '../../services/productService';
import {
  Card,
  CardActions,
  CardBody,
  CardDescription,
  CardMedia,
  CardPrice,
  CardTitle,
} from '../ui/Card';
import { PrimaryButton, SecondaryButton } from '../buttons';
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

  const normalizedProducts = useMemo(
    () =>
      products.map((product) => {
        const displayName = product.name?.trim() ? product.name.trim() : 'Produto sem nome';
        const displayDescription =
          product.description?.trim() ?? 'Descrição não disponível no momento.';
        const displayImage = product.imageUrl ?? product.imgUrl ?? '';

        return {
          ...product,
          displayName,
          displayDescription,
          displayImage,
        };
      }),
    [products]
  );

  return (
    <section className={styles.wrapper} aria-labelledby="product-list-heading">
      <h2 className={styles.heading} id="product-list-heading">
        Produtos
      </h2>
      {normalizedProducts.length === 0 ? (
        <p className={styles.status}>Nenhum produto disponível.</p>
      ) : (
        <ul className={styles.grid}>
          {normalizedProducts.map((product) => (
            <li className={styles.item} key={product.id}>
              <Card>
                {product.displayImage && (
                  <CardMedia
                    src={`${product.displayImage}?auto=format&fit=crop&w=640&q=80`}
                    alt={product.displayName}
                  />
                )}
                <CardBody>
                  <CardTitle>{product.displayName}</CardTitle>
                  <CardPrice>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(product.price)}
                  </CardPrice>
                  <CardDescription>{product.displayDescription}</CardDescription>
                  <CardActions>
                    <SecondaryButton size="sm" type="button">
                      Detalhes
                    </SecondaryButton>
                    <PrimaryButton size="sm" type="button">
                      Adicionar
                    </PrimaryButton>
                  </CardActions>
                </CardBody>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
