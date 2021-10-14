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
    if (tallerOne) {
      while (tallerOne.height === ctx.charactersArray[randomIndexTwo].height) {
        randomIndexTwo = Math.floor(Math.random() * ctx.charactersArray.length);
      }
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
    chooseSecondCharacter();
  };

  const wrongAnswerHandler = () => {
    ctx.setCorrect('incorrect');
    setTimeout(() => {
      ctx.setGameOver(ctx.score + 1);
      let index = ctx.topTen.indexOf(ctx.topTen.find(leader=>leader.score < ctx.score))
      if (index) {
        // THIS WORKS.
        // it returns the index in the leaders array in context where the the score is lower
        // need to launch a post request here.
        // can try with a dummy test, pushing the name in the position?
        ctx.setHighScore(ctx.score);
      }
      // ctx.setScore(0);
      ctx.setGameOn(false);
      ctx.setCorrect(null);
    }, 500);
  };

  const checkHeightHandler = (chosen, other) => {
    if (chosen.height >= other.height) {
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
