import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
//styles 
import styles from './Contact.module.scss';

export const ContactForm = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_zwjip6k', 'template_aqd58x5', form.current, '_r2FnCaFRGVaFF3OS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className={styles.FormContainer}>
      <form ref={form} onSubmit={sendEmail}>
        <fieldset className={styles.Fieldset}>
          <div className={styles.NameDiv}>
            <label>Name</label>
            <input type="text" name="user_name" required/>
          </div>
          <div className={styles.EmailDiv}>
            <label>Email</label>
            <input type="email" name="user_email" required/>
          </div>
        </fieldset>
        <fieldset className={styles.Fieldset}>
          <div className={styles.MessageDiv}>
            <label>Message</label>
            <textarea name="message" required/>
          </div>
        </fieldset>
        <input type="submit" value="Send" className={styles.InputBtn}/>
        </form>
    </div>
  );
};
