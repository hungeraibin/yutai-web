import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.wrapper}>
      <Link href="/">
        <a className={styles.logo}>
          <img src="/img/logo.png" alt="Logo" width="40" />
          <h1 className={styles.name}>豫泰</h1>
        </a>
      </Link>
      <ul className={styles.nav}>
        <li>
          <Link href="/">
            <span>简介</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>业务</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>联系我们</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
