import { FC, useEffect, useState } from 'react';
import { fetchProducts, type ApiError, type Product } from '../../services/productService';

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
      <section aria-busy="true" aria-labelledby="product-list-heading">
        <h2 id="product-list-heading">Produtos</h2>
        <p>Carregando produtos...</p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section aria-live="polite" aria-labelledby="product-list-heading">
        <h2 id="product-list-heading">Produtos</h2>
        <p role="alert">{errorMessage}</p>
      </section>
    );
  }

  return (
    <section aria-labelledby="product-list-heading">
      <h2 id="product-list-heading">Produtos</h2>
      {products.length === 0 ? (
        <p>Nenhum produto disponível.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
