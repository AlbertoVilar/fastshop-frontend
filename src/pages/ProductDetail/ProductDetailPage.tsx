import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  fetchProductById,
  type ApiError,
  type Product,
} from '../../services/productService';
import { PrimaryButton, SecondaryButton } from '../../components/buttons';
import styles from './ProductDetailPage.module.css';

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export const ProductDetailPage: FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) {
      setErrorMessage('Produto não encontrado.');
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    const loadProduct = async () => {
      setIsLoading(true);
      try {
        const item = await fetchProductById(productId);
        if (isMounted) {
          setProduct(item);
          setErrorMessage(null);
        }
      } catch (error) {
        let message = 'Não foi possível carregar o produto.';
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

    void loadProduct();

    return () => {
      isMounted = false;
    };
  }, [productId]);

  if (isLoading) {
    return <p className={styles.status}>Carregando produto...</p>;
  }

  if (errorMessage || !product) {
    return (
      <div className={styles.detail}>
        <p role="alert">{errorMessage ?? 'Produto não encontrado.'}</p>
        <SecondaryButton type="button" onClick={() => navigate(-1)}>
          Voltar
        </SecondaryButton>
      </div>
    );
  }

  const {
    name,
    price,
    description,
    stock,
    categoryName,
    imageUrl,
    imgUrl,
  } = product;

  const imageSrc = imageUrl ?? imgUrl ?? '';

  return (
    <div className={styles.detail}>
      <header className={styles.header}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.meta}>
          {categoryName && <span>Categoria: {categoryName}</span>}
          {typeof stock === 'number' && <span>Estoque: {stock}</span>}
        </p>
      </header>

      <div className={styles.content}>
        {imageSrc && (
          <div className={styles.imageWrapper}>
            <img
              src={`${imageSrc}?auto=format&fit=crop&w=960&q=80`}
              alt={name}
            />
          </div>
        )}

        <aside className={styles.info}>
          <strong className={styles.price}>{formatCurrency(price)}</strong>
          <p className={styles.description}>
            {description?.trim() ?? 'Descrição não disponível.'}
          </p>
          <div className={styles.actions}>
            <SecondaryButton type="button" onClick={() => navigate(-1)}>
              Voltar
            </SecondaryButton>
            <PrimaryButton type="button">Adicionar ao carrinho</PrimaryButton>
          </div>
        </aside>
      </div>
    </div>
  );
};
