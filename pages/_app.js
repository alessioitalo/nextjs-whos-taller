import Layout from '../components/Layout';
import '../styles/globals.css';
import TallerContext from '../context/taller-context';

function MyApp({ Component, pageProps }) {

  const one = { id:'50', name: 'Gérard Depardieu', bio: 'French actor', height: '180', photo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/G%C3%A9rard_Depardieu_avp_2016_3.jpg', credit: 'Georges Biard' }
  const two = { id :'55', name: 'Heather Graham', bio: 'American actress', height: 173, photo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/HeatherGrahamByDimitriSarantis2011.jpg', credit: 'Dimitri Sarantis' }
  return (
    <TallerContext.Provider value={{
      score: 0,
      tallerOne: one,
      tallerTwo: two,
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TallerContext.Provider>
  );
}

export default MyApp;
