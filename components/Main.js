import React, { useContext } from 'react';
import TallerContext from '../context/taller-context';
import GameOver from './GameOver';
import {
  StyledMain,
  StyledButton,
  StyledOverlay,
  StyledGameOver,
} from './styled';

const Main = () => {
  const ctx = useContext(TallerContext);

  return (
    <StyledMain>
      <StyledOverlay>
        <h1>Who's taller?</h1>
        <h5>
          the guessing game for celebrities, fictional and historical
          characters' heights
        </h5>
        {ctx.gameOver && <GameOver />}
        <StyledButton onClick={() => ctx.setGameOn(true)}>
          Play now!
        </StyledButton>
        <p>
          Background Photo by{' '}
          <a href='https://unsplash.com/@brandomakesbranding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Brando Makes Branding
          </a>{' '}
          on{' '}
          <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Unsplash
          </a>
        </p>
      </StyledOverlay>
    </StyledMain>
  );
};

export default Main;
