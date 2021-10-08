import TallerContext from '../context/taller-context';
import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

// import { MongoClient } from 'mongodb';

// export async function getStaticProps() {
//   const client = await MongoClient.connect(
//     `mongodb+srv://alessioitalo-taller:bkUTta0Ut6GrKBbc@cluster0.jncm5.mongodb.net/whos-taller?retryWrites=true&w=majority`
//   );
//   const db = client.db();
//   const charactersCollection = db.collection('characters');
//   const characters = await charactersCollection.find().toArray();
//   client.close();
//   return {
//     props: {
//       characters: characters.map((char) => ({
//         id: char._id.toString(),
//         name: char.name,
//         bio: char.bio,
//         photo: char.photo,
//         credit: char.credit,
//         height: char.height,
//       })),
//     },
//   };
// }

function MyApp({ Component, pageProps }) {

  const [charactersArray, setCharactersArray] = useState([])
  const [score, setScore] = useState()
  const [gameOn, setGameOn] = useState()
  return (
    <TallerContext.Provider
      value={{
        score,
        setScore,
        charactersArray,
        setCharactersArray,
        gameOn,
        setGameOn
        // tallerOne,
        // setTallerOne,
        // tallerTwo,
        // setTallerTwo,
        // setScore,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TallerContext.Provider>
  );
}

export default MyApp;



  // const one = {
  //   id: '50',
  //   name: 'Gérard Depardieu',
  //   bio: 'French actor',
  //   height: '180',
  //   photo:
  //     'https://upload.wikimedia.org/wikipedia/commons/f/ff/G%C3%A9rard_Depardieu_avp_2016_3.jpg',
  //   credit: 'Georges Biard',
  // };
  // const two = {
  //   id: '55',
  //   name: 'Heather Graham',
  //   bio: 'American actress',
  //   height: 173,
  //   photo:
  //     'https://upload.wikimedia.org/wikipedia/commons/b/b3/HeatherGrahamByDimitriSarantis2011.jpg',
  //   credit: 'Dimitri Sarantis',
  // };