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
    <div class = 'contact-container'>
      <h1>Contact</h1>
      <p>Please do not hesitate to reach out. I'd love to hear from you!</p>
      <form class = 'form-container' ref={form} onSubmit={sendEmail}>
        <div class = 'form-field'>
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div class = 'form-field'>
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div class = 'form-field'>
          <label>Message</label>
          <textarea name="message"/>
          <input type="submit" value="Send" />
        </div>
      </form>
      <h2>Phone: (714)452-4202</h2>
    </div>
  )
}

export default Contact