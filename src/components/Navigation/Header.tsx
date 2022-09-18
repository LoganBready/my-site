import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <a href="#Home">
          <img
            src="/images/loganbready.png"
            alt="Profile Image"
            width={284}
            height={50}
            className={styles.Logo}
          />
        </a>
        <nav className={styles.Nav}>
          <ul className={styles.Ul}>
            <li className={styles.ContactBtn}>
              <Link href="#Home">
                <a className={styles.Atag}>Home</a>
              </Link>
            </li>
            <li className={styles.ContactBtn}>
              <Link href="#About">
                <a className={styles.Atag}>About</a>
              </Link>
            </li>
            <li className={styles.ContactBtn}>
              <Link href="#Projects">
                <a className={styles.Atag}>Projects</a>
              </Link>
            </li>
            <li className={styles.ContactBtn}>
              <Link href="#Contact">
                <a className={styles.Atag}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
