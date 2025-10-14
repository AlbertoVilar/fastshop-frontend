import { HTMLAttributes } from 'react';
import styles from './Container.module.css';

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container = ({ className, ...props }: ContainerProps) => {
  const classes = [styles.container, className].filter(Boolean).join(' ');

  return <div className={classes} {...props} />;
};
