import logo from '../assets/imgHome/LOGO.png';
import { Link } from "react-router-dom";
import '../assets/my-sass.scss';

function Banner () {
  return (
    <nav>
      <>
        <Link to="/"> <img src = {logo} alt = "Logo de Kasa"/></Link>
      </>   
      <ul>
        <li>
        <Link to="/">Accueil</Link>
        </li>
        <li>
        <Link to="/APropos">À propos</Link>
        </li>
      </ul>
    </nav> 
  )
}

const NavBanner = () => {
    return (
      <>
        <Banner />
      </>
    )  
  };
  
  export default NavBanner;