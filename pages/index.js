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
    },
  };
}

export default function Home({ characters }) {
  const ctx = useContext(TallerContext);
  const [tallerOne, setTallerOne] = useState(null);

  useEffect(() => {
    ctx.setCharactersArray(characters);
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
