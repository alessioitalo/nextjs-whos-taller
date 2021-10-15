import Main from '../components/Main';
import Game from '../components/Game';
import { useState, useEffect, useContext } from 'react';
import { MongoClient } from 'mongodb';
import TallerContext from '../context/taller-context';

const mongoUri = process.env.NEXT_PUBLIC_MONGO_URI;

export async function getServerSideProps() {
  const client = await MongoClient.connect(mongoUri);
  const db = client.db();
  const charactersCollection = db.collection('characters');
  const characters = await charactersCollection.find().toArray();
  const leadersCollection = db.collection('leaderboard');
  const leaders = await leadersCollection.find().toArray();
  client.close();
  return {
    props: {
      characters: characters.map((char) => ({
        id: char._id.toString(),
        name: char.name,
        bio: char.bio,
        photo: char.photo,
        credit: char.credit,
        height: char.height,
      })),
      leaders: leaders.map((leader) => ({
        id: leader._id.toString(),
        name: leader.name,
        score: leader.score,
      })),
      revalidate: 200,
    },
  };
}

export default function Home({ characters, leaders }) {
  const ctx = useContext(TallerContext);
  const [tallerOne, setTallerOne] = useState(null);

  useEffect(() => {
    ctx.setCharactersArray(characters);
    ctx.setTopTen(leaders.sort((a, b) => b.score - a.score).slice(0, 10));
  }, []);

  let randomIndexOne = Math.floor(Math.random() * ctx.charactersArray.length);

  return (
    <>

      {ctx.gameOn ? (
        <Game
          tallerOne={tallerOne || ctx.charactersArray[randomIndexOne]}
          setTallerOne={setTallerOne}
        />
      ) : (
        <Main />
      )}
    </>
  );
}
