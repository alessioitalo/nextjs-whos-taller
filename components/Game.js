import Half from './Half';
import Score from './Score';
import { StyledGameContainer } from './styled';
import TallerContext from '../context/taller-context';
import { useContext, useState, useEffect } from 'react';

const Game = ({ tallerOne, setTallerOne, setGameOver }) => {
  const ctx = useContext(TallerContext);
  const [tallerTwo, setTallerTwo] = useState(null);

  useEffect(() => {
    chooseSecondCharacter();
  }, []);

  const chooseSecondCharacter = () => {
    let randomIndexTwo = Math.floor(Math.random() * ctx.charactersArray.length);
    if (tallerTwo) {
      while (tallerTwo.height === ctx.charactersArray[randomIndexTwo].height || tallerOne.height === ctx.charactersArray[randomIndexTwo].height) {
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
    ctx.setGameOver(ctx.score + 1);
    ctx.setScore(0);
    ctx.setGameOn(false);
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
