import { FC } from 'react';
import type { Product } from '../../services/productService';

type ProductListProps = {
  products?: Product[];
  isLoading?: boolean;
  errorMessage?: string;
};

export const ProductList: FC<ProductListProps> = ({
  products = [],
  isLoading = false,
  errorMessage,
}) => {
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
              {'price' in product && <p>{product.price}</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

