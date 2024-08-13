import React,{useRef} from 'react'
import emailjs from '@emailjs/browser'

import './Contact.css'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_atp7chh', 'template_av397z4', form.current, {
        publicKey: 'skWCvVh0kWxGJOR_P',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <h1>Contact</h1>
      <p>Please do not hesitate to reach out. I'd love to hear from you!</p>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  )
}

export default Contact