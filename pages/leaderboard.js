import { MongoClient } from 'mongodb';
import React from 'react';
import {
  StyledMain,
  StyledOverlay,
  StyledScoreboard,
} from '../components/styled';

const mongoUri = process.env.NEXT_PUBLIC_MONGO_URI;

export async function getServerSideProps(context) {
  const client = await MongoClient.connect(mongoUri);
  const db = client.db();
  const leadersCollection = db.collection('leaderboard');
  const leaders = await leadersCollection.find().toArray();
  client.close();

  return {
    props: {
      leaders: leaders.map((leader) => {
        return {
          id: leader._id.toString(),
          name: leader.name,
          score: leader.score,
        };
      }),
    },
  };
}


const Leaderboard = ({ leaders }) => {

  return (
    <StyledMain>
      <StyledOverlay />
      <div className='content'>
        <h1>Leaderboard</h1>
        <p>Can you make it to the top?</p>
        <StyledScoreboard>
          <ul>
            {leaders.sort((a, b) => b.score - a.score).map((leader) => {
              return (
                <li key={leader.id}>
                  {leader.name} | {leader.score}
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
