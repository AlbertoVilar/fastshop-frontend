import { FormEvent, useState } from 'react';
import { PrimaryButton } from '../../buttons';
import styles from './SearchBar.module.css';

export type SearchBarProps = {
  className?: string;
  placeholder?: string;
  buttonLabel?: string;
  defaultValue?: string;
  onSearch?: (value: string) => void;
};

export const SearchBar = ({
  className,
  placeholder = 'Buscar',
  buttonLabel = 'Buscar',
  defaultValue = '',
  onSearch,
}: SearchBarProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch?.(value.trim());
  };

  const classes = [styles.searchBar, className].filter(Boolean).join(' ');

  return (
    <form className={classes} onSubmit={handleSubmit} role="search">
      <input
        className={styles.input}
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      <PrimaryButton type="submit" size="sm">
        {buttonLabel}
      </PrimaryButton>
    </form>
  );
};
