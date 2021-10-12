// import { MongoClient } from 'mongodb';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  StyledMain,
  StyledOverlay,
  StyledScoreboard,
} from '../components/styled';
import TallerContext from '../context/taller-context';

// const mongoUri = process.env.NEXT_PUBLIC_MONGO_URI;

const Leaderboard = () => {
  const ctx = useContext(TallerContext);
  const router = useRouter();

  useEffect(() => {
    if (ctx.topTen.length === 0) {
      router.replace('/');
    }
    // preventing leaderboard page to be shown as empty
    // as staticProps are being loaded in the context in the main page
  }, []);

  return (
    <StyledMain>
      <StyledOverlay />
      <div className='content'>
        <h1>Leaderboard</h1>
        <p>Can you make it to the top?</p>
        <StyledScoreboard>
          <ul>
            {ctx.topTen.map((leader) => (
              <li key={leader.id}>
                {leader.name} | {leader.score}
              </li>
            ))}
          </ul>
        </StyledScoreboard>
      </div>
    </StyledMain>
  );
};

export default Leaderboard;
