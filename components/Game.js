import Half from './Half';
import Score from './Score';
import { StyledGameContainer } from './styled';
import TallerContext from '../context/taller-context';
import { useContext, useState, useEffect } from 'react';

const Game = ({ tallerOne, setTallerOne }) => {
  const ctx = useContext(TallerContext);
  const [tallerTwo, setTallerTwo] = useState(null);

  useEffect(() => {
    chooseSecondCharacter(tallerOne);
  }, []);

  const chooseSecondCharacter = (character) => {
    let randomIndexTwo = Math.floor(Math.random() * ctx.charactersArray.length);
    while (character.height === ctx.charactersArray[randomIndexTwo].height) {
      randomIndexTwo = Math.floor(Math.random() * 4);
    }
    setTallerTwo(ctx.charactersArray[randomIndexTwo]);
  };

  const rightAnswerHandler = () => {
    ctx.setCorrect('correct');
    ctx.setScore((prevScore) => prevScore + 1);
    setTimeout(() => {
      ctx.setCorrect(null);
    }, 500);
    setTallerOne(tallerTwo);
    chooseSecondCharacter(tallerTwo);
  };

  const wrongAnswerHandler = () => {
    ctx.setCorrect('incorrect');
    setTimeout(() => {
      ctx.setGameOver(ctx.score + 1);
      const index = ctx.topTen.at(-1);
      if (ctx.score > index.score) {
        ctx.setHighScore(ctx.score);
      } else {
        ctx.setScore(0);
        ctx.setHighScore(false);
      }
      ctx.setGameOn(false);
      ctx.setCorrect(null);
    }, 500);
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
        first={true}
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
