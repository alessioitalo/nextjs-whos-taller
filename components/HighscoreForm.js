import { StyledButton } from './styled';
import { StyledHighscoreForm } from './styled';
import { useContext, useRef } from 'react';
import TallerContext from '../context/taller-context';
import { useRouter } from 'next/router';

const HighscoreForm = () => {
  const ctx = useContext(TallerContext);
  const nameRef = useRef();
  const router = useRouter();

  const addNewHighscore = async (newScore) => {
    const response = await fetch('/api/new-score', {
      method: 'POST',
      body: JSON.stringify(newScore),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    });
    const data = await response.json();
    console.log(data);
    router.replace('/');
  };

  return (
    <StyledHighscoreForm>
      <label>You made the leaderboard! Enter your name: </label>
      <input ref={nameRef} />
      <div>
        <StyledButton
          onClick={() =>
            addNewHighscore({
              name: nameRef.current.value,
              score: ctx.score,
            })
          }
        >
          Submit
        </StyledButton>
        <StyledButton onClick={() => ctx.setGameOver(false)}>Skip</StyledButton>
      </div>
    </StyledHighscoreForm>
  );
};

export default HighscoreForm;
