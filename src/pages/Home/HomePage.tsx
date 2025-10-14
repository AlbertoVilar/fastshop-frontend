import { FC } from 'react';
import { Button } from '../../components/ui/Button';
import {
  Card,
  CardActions,
  CardBody,
  CardDescription,
  CardMedia,
  CardPrice,
  CardTitle,
} from '../../components/ui/Card';
import { Chip } from '../../components/ui/Chip';
import styles from './HomePage.module.css';

const categories = [
  'Smartphones',
  'Games',
  'Casa inteligente',
  'Audio',
  'Fitness',
  'Computadores',
  'Bem-estar',
  'Moda e lifestyle',
] as const;

type Product = {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
};

const featuredProducts: Product[] = [
  {
    id: 'pulse-x',
    title: 'Smartphone Pulse X',
    price: 'R$ 2.799,00',
    description: 'Tela 6.7" 120 Hz, camera tripla 64 MP, 5G',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'playbox-pro',
    title: 'Console PlayBox Pro',
    price: 'R$ 4.499,00',
    description: 'SSD 1 TB, ray tracing, dois controles sem fio',
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'aurora-headset',
    title: 'Headset Aurora Wireless',
    price: 'R$ 899,00',
    description: 'Cancelamento de ruido ativo, 32 h de bateria, Bluetooth 5.3',
    image:
      'https://images.unsplash.com/photo-1512499617640-c2f999098c4b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'lumen-lamp',
    title: 'Luminaria Lumen Desk',
    price: 'R$ 349,00',
    description: 'LED RGB, carregamento wireless e ajuste de intensidade',
    image:
      'https://images.unsplash.com/photo-1526328828355-54f8a1c89c62?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'gravity-sneakers',
    title: 'Gravity Sneakers',
    price: 'R$ 629,00',
    description: 'Tecnologia cloud step, indicado para treinos intensos',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'barista-plus',
    title: 'Cafeteira Barista Plus',
    price: 'R$ 1.199,00',
    description: 'Espresso com moedor integrado e vaporizador profissional',
    image:
      'https://images.unsplash.com/photo-1505577078420-7c9fa3ee3eb2?q=80&w=1200&auto=format&fit=crop',
  },
];

export const HomePage: FC = () => (
  <div>
    <section className={styles.hero} id="produtos">
      <header className={styles.heroHeader}>
        <h1 className={styles.heroTitle}>Descubra ofertas incriveis para o seu dia a dia</h1>
        <p className={styles.heroSubtitle}>
          Eletronicos, moda, casa, mercado e muito mais. Compre com rapidez e seguranca com a
          curadoria FastShop.
        </p>
      </header>

      <form className={styles.searchForm} role="search">
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Busque por produtos, marcas ou categorias"
          aria-label="Buscar produto"
        />
        <Button type="submit" variant="primary">
          Buscar
        </Button>
      </form>

      <div className={styles.categories} id="categorias" aria-label="Categorias em destaque">
        {categories.map((category) => (
          <Chip key={category} as="span">
            {category}
          </Chip>
        ))}
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <div>
          <h2 className={styles.sectionTitle}>Produtos em destaque</h2>
          <p className={styles.sectionSubtitle}>Selecionados pela nossa curadoria semanal</p>
        </div>
        <Button variant="ghost" size="sm" type="button">
          Ver todos
        </Button>
      </div>

      <div className={styles.grid}>
        {featuredProducts.map((product) => (
          <Card key={product.id}>
            <CardMedia src={product.image} alt={product.title} />
            <CardBody>
              <CardTitle>{product.title}</CardTitle>
              <CardPrice>{product.price}</CardPrice>
              <CardDescription>{product.description}</CardDescription>
              <CardActions>
                <Button variant="outline" type="button" size="sm">
                  Detalhes
                </Button>
                <Button variant="primary" type="button" size="sm">
                  Adicionar
                </Button>
              </CardActions>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>

    <section className={`${styles.section} ${styles.cta}`} id="contato">
      <div className={styles.ctaContent}>
        <div>
          <h2 className={styles.ctaTitle}>Ofertas exclusivas toda semana</h2>
          <p className={styles.ctaText}>
            Assine a newsletter para receber previas de lancamentos, cupons especiais e conteudo
            feito pela equipe FastShop.
          </p>
        </div>
        <form className={styles.ctaForm}>
          <input className={styles.ctaInput} type="email" placeholder="Seu melhor e-mail" />
          <Button type="submit" variant="primary">
            Quero receber
          </Button>
        </form>
      </div>
    </section>
  </div>
);
