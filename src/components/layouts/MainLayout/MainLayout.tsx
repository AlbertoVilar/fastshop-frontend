import { NavLink, Outlet } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '../../buttons';
import { Container } from '../../ui/Container';
import styles from './MainLayout.module.css';

const getNavClassName = ({ isActive }: { isActive: boolean }) =>
  [styles.navLink, isActive ? styles.navLinkActive : ''].filter(Boolean).join(' ');

export const MainLayout = () => (
  <div className={styles.shell}>
    <header className={styles.header}>
      <Container className={styles.headerContent}>
        <NavLink to="/" className={styles.brand}>
          FastShop
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/catalog" className={getNavClassName}>
            Produtos
          </NavLink>
          <a className={styles.navLink} href="#categorias">
            Categorias
          </a>
          <NavLink to="/dashboard" className={getNavClassName}>
            Ofertas
          </NavLink>
          <a className={styles.navLink} href="#contato">
            Contato
          </a>
        </nav>
        <div className={styles.headerActions}>
          <SecondaryButton as="a" href="/sign-in">
            Entrar
          </SecondaryButton>
          <PrimaryButton as="a" href="/dashboard">
            Carrinho
          </PrimaryButton>
        </div>
      </Container>
    </header>
    <main className={styles.main}>
      <Container>
        <Outlet />
      </Container>
    </main>
    <footer className={styles.footer}>
      <Container>
        <small>
          {`Copyright ${new Date().getFullYear()} FastShop - todos os direitos reservados.`}
        </small>
      </Container>
    </footer>
  </div>
);
