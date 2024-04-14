import { validateMessage, validateEmail } from '../utils/helpers';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Your email is invalid');
      return;
    }
    if (!validateMessage(message)) {
      setErrorMessage(
        `Message is required`
      );
      return;
    }
    console.log(e.target);

    emailjs.sendForm('service_0w9ndfl!', 'template_iicpqqa', e.target, 'tDl3oaAxAUj1pEl0z')
      .then((result) => {
        console.log(result.text);
        console.log("message sent!")
      }, (error) => {
        console.log(error.text);
        console.log("error sending message, try again!")
      });
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="form-container text-center">
      <h1>Contact</h1>
      <form className="form" onSubmit={sendEmail}>
        <p>Name:</p>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <p>Email address:</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <p>Message:</p>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
        />
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;