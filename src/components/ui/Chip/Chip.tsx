import { ElementType, JSX } from 'react';
import styles from './Chip.module.css';

export type ChipProps<C extends keyof JSX.IntrinsicElements = 'span'> = {
  as?: C;
  className?: string;
} & JSX.IntrinsicElements[C];

export const Chip = <C extends keyof JSX.IntrinsicElements = 'span'>({
  as,
  className,
  ...props
}: ChipProps<C>) => {
  const Component = (as ?? 'span') as ElementType;
  const classes = [styles.chip, className].filter(Boolean).join(' ');
  return <Component className={classes} {...(props as JSX.IntrinsicElements[C])} />;
};
