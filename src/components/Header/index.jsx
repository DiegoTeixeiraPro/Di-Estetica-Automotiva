import styles from './style.module.css';

import logo from '../../assets/images/logo.svg';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <img src={logo} alt="Logo" />
        <h2>
          <span>Di</span>Estética Automotiva
        </h2>
      </div>
    </header>
  );
};
