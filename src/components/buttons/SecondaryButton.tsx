import { ForwardedRef, forwardRef } from 'react';
import { Button, ButtonProps } from '../ui/Button/Button';

export type SecondaryButtonProps = Omit<ButtonProps, 'variant'>;

const SecondaryButtonComponent = (
  props: SecondaryButtonProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) => {
  const buttonProps = { ...props, variant: 'outline' } as ButtonProps;
  return <Button ref={ref} {...buttonProps} />;
};

export const SecondaryButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  SecondaryButtonProps
>(SecondaryButtonComponent);

SecondaryButton.displayName = 'SecondaryButton';
