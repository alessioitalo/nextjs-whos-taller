import { StyledButton, StyledContactForm } from './styled';
import { useState } from 'react';
import useForm from '../hooks/use-form';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // CUSTOM HOOK to validate form?
  // POST REQUEST still not working...
  // https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645
  // input must be emptied?
  const { error, validForm, validateForm, setError } = useForm(
    name,
    email,
    message
  );

  const emptyInput = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const contactFormHandler = async (e) => {
    e.preventDefault();
    setError([]);
    validateForm();
    if (error) {
      return;
    }
    const messageData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    setSubmitted(true);
    emptyInput();
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(completeMessage),
    // });
    // const data = await response.json();
    // console.log(data);
  };

  return (
    <>
      {submitted ? (
        <h1>Email sent!</h1>
      ) : (
        <StyledContactForm onSubmit={contactFormHandler}>
          <label>Your Name</label>
          <input type='text' onChange={(e) => setName(e.target.value)} />
          <label>Your email address</label>
          <input type='email' onChange={(e) => setEmail(e.target.value)} />
          <label>Your message</label>
          <textarea
            type='text'
            className='text-area'
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {error.length > 1 && (
            <>
            <p>Something went wrong.</p>
            <ul className='error'>
              {error.map((err) => (
                <li key={error.indexOf(err)}>{err}</li>
              ))}
            </ul>
            </>
          )}
          <StyledButton>Send</StyledButton>
        </StyledContactForm>
      )}
    </>
  );
};

export default ContactForm;
