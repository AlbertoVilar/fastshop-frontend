import { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.css';

export type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => {
  const classes = [styles.card, className].filter(Boolean).join(' ');
  return <div className={classes} {...props} />;
};

type CardMediaProps = {
  src: string;
  alt: string;
  className?: string;
};

export const CardMedia = ({ src, alt, className }: CardMediaProps) => {
  const classes = [styles.media, className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      <img src={src} alt={alt} />
    </div>
  );
};

type CardBodyProps = {
  children: ReactNode;
  className?: string;
};

export const CardBody = ({ children, className }: CardBodyProps) => {
  const classes = [styles.body, className].filter(Boolean).join(' ');
  return <div className={classes}>{children}</div>;
};

type CardTitleProps = {
  children: ReactNode;
  className?: string;
};

export const CardTitle = ({ children, className }: CardTitleProps) => {
  const classes = [styles.title, className].filter(Boolean).join(' ');
  return <h3 className={classes}>{children}</h3>;
};

type CardPriceProps = {
  children: ReactNode;
  className?: string;
};

export const CardPrice = ({ children, className }: CardPriceProps) => {
  const classes = [styles.price, className].filter(Boolean).join(' ');
  return <p className={classes}>{children}</p>;
};

type CardDescriptionProps = {
  children: ReactNode;
  className?: string;
};

export const CardDescription = ({ children, className }: CardDescriptionProps) => {
  const classes = [styles.description, className].filter(Boolean).join(' ');
  return <p className={classes}>{children}</p>;
};

type CardActionsProps = {
  children: ReactNode;
  className?: string;
};

export const CardActions = ({ children, className }: CardActionsProps) => {
  const classes = [styles.actions, className].filter(Boolean).join(' ');
  return <div className={classes}>{children}</div>;
};
