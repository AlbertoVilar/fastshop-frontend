import { ForwardedRef, forwardRef } from 'react';
import { Button, ButtonProps } from '../ui/Button/Button';

export type DangerButtonProps = Omit<ButtonProps, 'variant'>;

const DangerButtonComponent = (
  props: DangerButtonProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) => {
  const buttonProps = { ...props, variant: 'danger' } as ButtonProps;
  return <Button ref={ref} {...buttonProps} />;
};

export const DangerButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, DangerButtonProps>(
  DangerButtonComponent
);

DangerButton.displayName = 'DangerButton';
