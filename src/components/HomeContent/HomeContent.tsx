//styles
import styles from './HomeContent.module.scss';
import {FaAngleDoubleRight} from 'react-icons/fa';

export const HomeContent = () => {
    return (
        <>
          <h1 className={styles.H1}>Hello, I'm <span className={styles.Span}>Logan</span>.</h1>
          <h2 className={styles.H2}>I'm a <span className={styles.Typed}>front-end engineer</span>.</h2>
          <a className={styles.ContactBtn}>Contact <FaAngleDoubleRight fontSize={'20px'}/></a>
        </>
    )
}