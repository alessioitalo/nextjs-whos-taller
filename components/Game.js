import Half from './Half';
import Score from './Score';
import { StyledGameContainer } from './styled';
import TallerContext from '../context/taller-context';
import { useContext, useState, useEffect } from 'react';

const Game = ({ tallerOne, setTallerOne }) => {
  const ctx = useContext(TallerContext);
  const [tallerTwo, setTallerTwo] = useState(null);
  
  useEffect(() => {
    chooseSecondCharacter();
  }, []);

  const chooseSecondCharacter = () => {
    let randomIndexTwo = Math.floor(Math.random() * ctx.charactersArray.length);
    if (tallerTwo) {
      while (tallerTwo.height === ctx.charactersArray[randomIndexTwo].height) {
        console.log('printed from while loop');

        randomIndexTwo = Math.floor(Math.random() * ctx.charactersArray.length);
      }
    }
    setTallerTwo(ctx.charactersArray[randomIndexTwo]);
  };

  const rightAnswerHandler = () => {
    ctx.setScore((prevScore) => prevScore + 1);
    setTallerOne(tallerTwo);
    chooseSecondCharacter();
  };

  const wrongAnswerHandler = () => {
    console.log('game over! you scored ' + ctx.score);
    ctx.setGameOn(false);
    ctx.setScore(0);
  };

  const checkHeightHandler = (chosen, other) => {
    if (chosen.height > other.height) {
      rightAnswerHandler();
      return;
    }
    wrongAnswerHandler();
  };

  return (
    <StyledGameContainer>
      <Half
        character={tallerOne}
        onClick={() => checkHeightHandler(tallerOne, tallerTwo)}
      />
      {tallerTwo && (
        <Half
          character={tallerTwo}
          onClick={() => checkHeightHandler(tallerTwo, tallerOne)}
        />
      )}
      <Score />
    </StyledGameContainer>
  );
};

export default Game;
