import TallerContext from '../context/taller-context';
import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [charactersArray, setCharactersArray] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [correct, setCorrect] = useState(false);

  return (
    <TallerContext.Provider
      value={{
        score,
        setScore,
        charactersArray,
        setCharactersArray,
        gameOn,
        setGameOn,
        gameOver,
        setGameOver,
        correct,
        setCorrect,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TallerContext.Provider>
  );
}

export default MyApp;
