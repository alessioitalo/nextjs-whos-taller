import Half from './Half';
import Score from './Score';
import { StyledGameContainer } from './styled';
import TallerContext from '../context/taller-context';
import { useContext } from 'react';

const Game = () => {
  const ctx = useContext(TallerContext);
  return (
    <StyledGameContainer>
      <Half
        character={
          ctx.charactersArray[
            Math.floor(Math.random() * ctx.charactersArray.length)
          ]
        }
      />
      <Half
        character={
          ctx.charactersArray[
            Math.floor(Math.random() * ctx.charactersArray.length)
          ]
        }
      />
      <Score />
    </StyledGameContainer>
  );
};

export default Game;
