import { FormEvent, useState } from 'react';
import { PrimaryButton } from '../../buttons';
import styles from './NewsletterSignup.module.css';

export type NewsletterSignupProps = {
  className?: string;
  placeholder?: string;
  buttonLabel?: string;
  defaultValue?: string;
  onSubmit?: (value: string) => void;
};

export const NewsletterSignup = ({
  className,
  placeholder = 'Digite seu e-mail',
  buttonLabel = 'Inscrever',
  defaultValue = '',
  onSubmit,
}: NewsletterSignupProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }
    onSubmit?.(trimmed);
    setValue('');
  };

  const classes = [styles.form, className].filter(Boolean).join(' ');

  return (
    <form className={classes} onSubmit={handleSubmit} noValidate>
      <input
        className={styles.input}
        type="email"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        autoComplete="email"
        required
      />
      <PrimaryButton type="submit" size="sm">
        {buttonLabel}
      </PrimaryButton>
    </form>
  );
};
