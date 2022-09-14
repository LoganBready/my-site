//styles
import styles from './HomeContent.module.scss';
import { TypeAnimation } from 'react-type-animation';

export const HomeContent = () => {
    return (
        <>
        <h1 className={styles.H1}>Hello, I'm <span className={styles.Span}>Logan</span>.</h1>
        <h2 className={styles.H2}>I'm a <span className={styles.Typed}>front-end engineer</span>.</h2>
        </>
    )
}