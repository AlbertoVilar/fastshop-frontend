import { CSSProperties } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const linkBaseStyle: CSSProperties = {
  display: 'inline-block',
  padding: '0.5rem 1rem',
  borderRadius: '0.375rem',
  textDecoration: 'none',
  color: '#1f2933',
};

const activeStyle: CSSProperties = {
  ...linkBaseStyle,
  backgroundColor: '#1f6feb',
  color: '#ffffff',
};

export const MainLayout = () => (
  <div style={{ minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
    <header
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e7ff',
        padding: '1rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: '960px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <strong style={{ fontSize: '1.125rem' }}>Fastshop</strong>
        <nav style={{ display: 'flex', gap: '0.5rem' }}>
          <NavLink to="/" end style={({ isActive }) => (isActive ? activeStyle : linkBaseStyle)}>
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => (isActive ? activeStyle : linkBaseStyle)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/sign-in"
            style={({ isActive }) => (isActive ? activeStyle : linkBaseStyle)}
          >
            Entrar
          </NavLink>
        </nav>
      </div>
    </header>
    <main style={{ margin: '0 auto', maxWidth: '960px', padding: '2rem 1rem' }}>
      <Outlet />
    </main>
  </div>
);
