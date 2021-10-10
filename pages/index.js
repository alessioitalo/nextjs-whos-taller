import Main from '../components/Main';
import Game from '../components/Game';
import { StyledMain } from '../components/styled';
import { useState, useEffect, useContext } from 'react';
import { MongoClient } from 'mongodb';
import TallerContext from '../context/taller-context';

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://alessioitalo-taller:bkUTta0Ut6GrKBbc@cluster0.jncm5.mongodb.net/whos-taller?retryWrites=true&w=majority`
  );
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
