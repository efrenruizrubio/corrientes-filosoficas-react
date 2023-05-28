import styles from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img
          src='/src/assets/icons/logo.svg'
          alt='Corrientes Filosóficas'
          className={styles.header_logo}
        />
      </header>
    </>
  );
};
