import Link from "next/link";
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <h1 className={styles.Heading}>Logan Bready</h1>
        <nav className={styles.Nav}>
          <ul className={styles.Ul}>
            <li className={styles.ContactBtn}>
              <Link href="/">
                <a className={styles.Atag}>Home</a>
              </Link>
            </li>
            <li className={styles.ContactBtn}>
              <Link href="/about">
                <a className={styles.Atag}>About</a>
              </Link>
            </li>
            <li className={styles.ContactBtn}>
              <Link href="/blog">
                <a className={styles.Atag}>Projects</a>
              </Link>
            </li>
            <li className={styles.ContactBtn}>
              <Link href="/blog">
                <a className={styles.Atag}>Blog</a>
              </Link>
            </li>
            <li className={styles.ContactBtn}>
              <Link href="/blog">
                <a className={styles.Atag}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
