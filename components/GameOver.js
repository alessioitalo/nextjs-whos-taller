import { StyledGameOver, StyledButton } from './styled';
import { useContext } from 'react';
import TallerContext from '../context/taller-context';
const GameOver = () => {
  const ctx = useContext(TallerContext);
  return (
    <StyledGameOver>
    <h1>Game Over!</h1>
       You Scored {ctx.gameOver - 1}!
      <StyledButton onClick={() => ctx.setGameOver(false)}>Close</StyledButton>
    </StyledGameOver>
  );
};

export default GameOver;
