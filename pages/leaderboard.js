import React from 'react';
import {
  StyledMain,
  StyledOverlay,
  StyledScoreboard,
} from '../components/styled';

const DUMMY_DATA = [
  { name: 'John Doe', score: 32 },
  { name: 'Jane Doe', score: 4 },
  { name: 'John Doe', score: 6 },
  { name: 'Jane Doe', score: 3 },
  { name: 'John Doe', score: 52 },
  { name: 'Jane Doe', score: 19 },
  { name: 'John Doe', score: 14 },
  { name: 'Jane Doe', score: 14 },
  { name: 'John Doe', score: 12 },
  { name: 'Jane Doe', score: 40 },
];

const Leaderboard = () => {
  return (
    <StyledMain>
      <StyledOverlay />
      <div className='content'>
          <h1>Leaderboard</h1>
        <p>Can you make it to the top?</p>
        <StyledScoreboard>
          <ul>
            {DUMMY_DATA.sort((a, b) => b.score - a.score).map((dummy) => {
              return (
                <li key={DUMMY_DATA.indexOf(dummy)}>
                  {dummy.name} | {dummy.score}
                </li>
              );
            })}
          </ul>
        </StyledScoreboard>
      </div>
    </StyledMain>
  );
};

export default Leaderboard;
