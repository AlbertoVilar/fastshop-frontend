import { FC } from 'react';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../features/auth/AuthProvider';
import styles from './DashboardPage.module.css';

const metrics = [
  {
    label: 'Receita do mes',
    value: 'R$ 384.920',
    trend: '+18% vs ultimo mes',
  },
  {
    label: 'Pedidos entregues',
    value: '1.248',
    trend: '+9% vs ultimo mes',
  },
  {
    label: 'Clientes ativos',
    value: '6.431',
    trend: '+23% no trimestre',
  },
] as const;

const activities = [
  { id: 'order-15431', name: 'Pedido #15431 enviado', time: 'Ha 12 minutos' },
  { id: 'stock-alert', name: 'Reposicao de estoque Home Office', time: 'Ha 45 minutos' },
  { id: 'support', name: 'Ticket 88219 resolvido', time: 'Ha 1 hora' },
  { id: 'newsletter', name: 'Campanha Novidades Tech enviada', time: 'Ha 2 horas' },
] as const;

export const DashboardPage: FC = () => {
  const { logout } = useAuth();

  return (
    <section className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Painel de performance</h1>
          <p className={styles.subtitle}>
            Acompanhe os principais indicadores do seu marketplace em tempo real e acione o time
            certo no momento certo.
          </p>
        </div>
        <Button type="button" variant="danger" onClick={logout}>
          Sair
        </Button>
      </header>

      <div className={styles.metrics}>
        {metrics.map((metric) => (
          <div key={metric.label} className={styles.metricCard}>
            <p className={styles.metricLabel}>{metric.label}</p>
            <p className={styles.metricValue}>{metric.value}</p>
            <span className={styles.metricTrend}>{metric.trend}</span>
          </div>
        ))}
      </div>

      <section className={styles.recentActivity}>
        <h2 className={styles.activityTitle}>Atividades recentes</h2>
        <ul className={styles.activityList}>
          {activities.map((activity) => (
            <li key={activity.id} className={styles.activityItem}>
              <span className={styles.activityName}>{activity.name}</span>
              <span className={styles.activityTime}>{activity.time}</span>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
