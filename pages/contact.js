import { StyledMain, StyledOverlay } from '../components/styled';
import ContactForm from '../components/ContactForm';
const Contact = () => {
  return (
    <StyledMain>
      <StyledOverlay />
        <div className='content'>
          <h1>Contact</h1>
          <div>Feedbacks? Questions? Unless you want to sue me, you can drop me a message using this contact form.</div>
          <ContactForm />
        </div>
    </StyledMain>
  );
};

export default Contact;
