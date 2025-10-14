import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
} from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const sizeClassMap: Record<Exclude<ButtonSize, 'md'>, string> = {
  sm: styles.sizeSmall,
  lg: styles.sizeLarge,
};

const ButtonComponent = (
  { variant = 'primary', size = 'md', fullWidth = false, className, as = 'button', ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) => {
  const classes = [
    styles.button,
    styles[variant],
    size !== 'md' ? sizeClassMap[size] : '',
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (as === 'a') {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return <a ref={ref as ForwardedRef<HTMLAnchorElement>} className={classes} {...anchorProps} />;
  }

  const { type = 'button', ...restButtonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      ref={ref as ForwardedRef<HTMLButtonElement>}
      className={classes}
      type={type}
      {...restButtonProps}
    />
  );
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(ButtonComponent);
Button.displayName = 'Button';
