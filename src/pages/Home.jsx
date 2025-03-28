import imgFondSlogan from '../assets/imgHome/imgFondSlogan.png';
import  logementData from '../data/logements.json';
import '../assets/my-sass.scss';
import Banner from '../components/banner.jsx';
import ListeCards from '../components/listeCards.jsx';



const Home = () => {
    return (
      <>
        <Banner 
          element = {imgFondSlogan} 
          alt ="Image d'une falaise" 
          title = "Image d'une falaise"
          h2 = "Chez vous, partout et ailleurs" />
        <ListeCards 
          logement = {logementData} />
      </>
    )  
  };
  
  export default Home;