import { StyledFooter } from './styled';

const Footer = () => {
  return (
    <StyledFooter>
      <span>
        Who's taller? Copyright {new Date().getFullYear()} ©{' '}
        <a href='https://www.alessioitalo.uk/' target="_blank" rel="noreferrer">alessioitalo</a>
      </span>
      <span className='credit'>
        <p>
          Background Photo by{' '}
          <a href='https://unsplash.com/@brandomakesbranding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText' target="_blank" rel="noreferrer">
            Brando Makes Branding
          </a>{' '}
          on{' '}
          <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText' target="_blank" rel="noreferrer">
            Unsplash
          </a>
        </p>
      </span>
    </StyledFooter>
  );
};

export default Footer;
