import React, { useContext } from 'react';
import TallerContext from '../context/taller-context';
import GameOver from './GameOver';
import {
  StyledMain,
  StyledButton,
  StyledOverlay,
} from './styled';

const Main = () => {
  const ctx = useContext(TallerContext);

  return (
    <StyledMain>
      <StyledOverlay />
        <div className='content'>
          <h1>Who's taller?</h1>
          <h5>
            The guessing game for celebrities, fictional and historical
            characters' heights
          </h5>
          {ctx.gameOver && <GameOver />}
          <StyledButton onClick={() => ctx.setGameOn(true)}>
            Play
          </StyledButton>
        </div>
    </StyledMain>
  );
};

export default Main;
