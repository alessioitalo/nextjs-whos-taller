import { StyledMain, StyledOverlay } from '../components/styled';

const About = () => {
  return (
    <StyledMain>
      <StyledOverlay />
        <div className='content'>
          <h1>About</h1>
          <div>
            <p>
              <i>Who's taller?</i> was created by{' '}
              <a
                href='https://www.alessioitalo.uk/'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                a tall guy
              </a>{' '}
              who has always wondered which famous people were taller than him.
              It is built with <a href='https://nextjs.org/'>NextJS</a>, a React
              framework.
            </p>

            <p>
              All the pictures being used are taken from{' '}
              <a
                href='https://commons.wikimedia.org/wiki/Main_Page'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                Wikimedia Commons
              </a>{' '}
              and they are not subject to any copyright restrictions. Authors
              are always credited.
            </p>

            <p>
              <i>Who's taller?</i> was inspired by the{' '}
              <a
                href='http://www.higherlowergame.com/'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                Higher Lower Game
              </a>
              , one of the most addictive games you'll ever play.{' '}
            </p>
          </div>
        </div>
    </StyledMain>
  );
};

export default About;
