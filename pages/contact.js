import { StyledMain, StyledOverlay } from '../components/styled';
import ContactForm from '../components/ContactForm';
const Contact = () => {
  return (
    <StyledMain>
      <StyledOverlay>
        <div className='content'>
          <h1>Contact</h1>
          <div>
            Gotta learn{' '}
            <a href='https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645'>
              this
            </a>{' '}
            first...
          </div>
          <ContactForm />
        </div>
      </StyledOverlay>
    </StyledMain>
  );
};

export default Contact;
