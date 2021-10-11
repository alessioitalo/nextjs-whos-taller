import {
  StyledButton,
  StyledContactForm,
  StyledFormConfirmation,
} from './styled';
import { useState, useRef } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState([])
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const contactFormHandler = async (e) => {
    e.preventDefault();
    setError([])
    console.log('form submitted');
    if (name === '' || email === '' || message === ''){
      setError(prevState => [...prevState, 'All fields are mandatory.'])
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      setError(prevState => [...prevState, 'Please enter a valid email address.'])
    }
    else{
      const messageData = {
        name,
        email,
        message,
      };
      setSubmitted(true)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain, */*',
        },
        body: JSON.stringify(messageData),
      });
      if (response.ok) {
        console.log('Response succeeded!');
        setName('');
        setEmail('');
        setBody('');
      }
    }
 
      
  };

  const clearFormHandler = () => {
    setSubmitted(false);
    setName('')
    setEmail('')
    setMessage('')
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <>
      {submitted && error.length === 0 && (
        <StyledFormConfirmation>
          <h3>Email sent!</h3>
          <p>We will get back to you soon!</p>
          <StyledButton onClick={clearFormHandler}>Close</StyledButton>
        </StyledFormConfirmation>
      )}
      <StyledContactForm onSubmit={contactFormHandler}>
        <label htmlFor='name'>Your Name</label>
        <input
          name='name'
          type='text'
          ref={nameRef}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='email'>Your email address</label>
        <input
          name='email'
          type='email'
          ref={emailRef}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='message'>Your message</label>
        <textarea
          type='text'
          className='text-area'
          name='message'
          ref={messageRef}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <ul className='error'>
          {error.map((err) => (
            <li key={error.indexOf(err)}>{err}</li>
          ))}
        </ul>

        <StyledButton>Send</StyledButton>
      </StyledContactForm>
    </>
  );
};

export default ContactForm;
