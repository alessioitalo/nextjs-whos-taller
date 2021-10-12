import TallerContext from '../context/taller-context';
import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';
// import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [charactersArray, setCharactersArray] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [topTen, setTopTen] = useState([]);
  const [highScore, setHighScore] = useState(false);
  // const router = useRouter();

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
        topTen,
        setTopTen,
        highScore,
        setHighScore,
        // addNewHighscore,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TallerContext.Provider>
  );
}

export default MyApp;
