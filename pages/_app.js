import TallerContext from '../context/taller-context';
import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [charactersArray, setCharactersArray] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOn, setGameOn] = useState();
  // const [tallerOne, setTallerOne] = useState(null);
  // const [tallerTwo, setTallerTwo] = useState(null)
  return (
    <TallerContext.Provider
      value={{
        score,
        setScore,
        charactersArray,
        setCharactersArray,
        gameOn,
        setGameOn,
        // tallerOne,
        // setTallerOne,
        // tallerTwo,
        // setTallerTwo,
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
