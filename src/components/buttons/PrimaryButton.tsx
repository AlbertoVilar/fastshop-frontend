import { ForwardedRef, forwardRef } from 'react';
import { Button, ButtonProps } from '../ui/Button/Button';

export type PrimaryButtonProps = Omit<ButtonProps, 'variant'>;

const PrimaryButtonComponent = (
  props: PrimaryButtonProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) => {
  const buttonProps = { ...props, variant: 'primary' } as ButtonProps;
  return <Button ref={ref} {...buttonProps} />;
};

export const PrimaryButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, PrimaryButtonProps>(
  PrimaryButtonComponent
);

PrimaryButton.displayName = 'PrimaryButton';
