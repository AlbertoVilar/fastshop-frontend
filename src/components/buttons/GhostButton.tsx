import { ForwardedRef, forwardRef } from 'react';
import { Button, ButtonProps } from '../ui/Button/Button';

export type GhostButtonProps = Omit<ButtonProps, 'variant'>;

const GhostButtonComponent = (
  props: GhostButtonProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) => {
  const buttonProps = { ...props, variant: 'ghost' } as ButtonProps;
  return <Button ref={ref} {...buttonProps} />;
};

export const GhostButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, GhostButtonProps>(
  GhostButtonComponent
);

GhostButton.displayName = 'GhostButton';
