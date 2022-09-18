//styles
import styles from './Contact.module.scss';
//components
import { ContactForm } from './ContactForm';

export const Contact = () => {
    return (
        <section className={styles.Contact} id="Contact">
          <div className={styles.Wrapper}>
            <ContactForm />
          </div>
        </section>
    );
}