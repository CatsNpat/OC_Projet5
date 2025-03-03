import '../assets/my-sass.scss';
import { Outlet, Link } from "react-router-dom";

function Erreur () {

  return(

    <main className='quatreMain'>
      <div>
        <h2>404</h2>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
      </div>
      <div className='quatrePara'>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Outlet />
    </main>
  )
}


const NoPage = () => {
    return (
      <>
      <Erreur />
      </>
    )
  };
  
  export default NoPage;
  