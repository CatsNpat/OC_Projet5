import imgFondSlogan from '../assets/imgHome/imgFondSlogan.png';
import  logementData from '../../public/logements.json';
import '../assets/my-sass.scss';

function Banner () {
  return (
      <div className='imgSlogan'>
        <img src = {imgFondSlogan} alt ="photo d'une falaise" titre ="photo d'une falaise"/>
          <div>
            <h2>Chez vous, partout et ailleurs</h2>
          </div>
      </div> 
  )
}

function Liste () {
  
  return (
    <main>
      <div className='main'>
        {logementData.map((element) => (
          <a href="#" className='logement' key = {element.id}>
            <img src = {element.cover} title = {element.title} alt = {element.title}/>
            <h3>{element.title}</h3>
          </a>
        ))}
      </div>
    </main>
  )
}



const Home = () => {
    return (
      <>
        <Banner />
        <Liste />
      </>
    )  
  };
  
  export default Home;