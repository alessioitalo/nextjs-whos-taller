import React, { useContext } from 'react';
import TallerContext from '../context/taller-context';
import { StyledMain, StyledButton } from './styled';

const Main = () => {
  const ctx = useContext(TallerContext);

  return (
    <StyledMain>
      <h1>Who's taller?</h1>
      <h5>
        the guessing game for celebrities, fictional and historical characters'
        heights
      </h5>
      <StyledButton onClick={() => ctx.setGameOn(true)}>Play now!</StyledButton>
    </StyledMain>
  );
};

export default Main;
