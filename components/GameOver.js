import { StyledGameOver, StyledButton } from './styled';
import { useContext } from 'react';
import TallerContext from '../context/taller-context';
import HighscoreForm from './HighscoreForm';

const GameOver = () => {
  const ctx = useContext(TallerContext);
  return (
    <StyledGameOver>
      <h1>Game Over!</h1>
      <span>You Scored {ctx.gameOver - 1}!</span>
      {ctx.highScore ? (
        <HighscoreForm />
      ) : (
        <StyledButton onClick={() => ctx.setGameOver(false)}>
          Close
        </StyledButton>
      )}
    </StyledGameOver>
  );
};

export default GameOver;
