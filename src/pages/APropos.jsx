import imgFondSlogan from '../assets/imgHome/Image source 2.png';
import '../assets/my-sass.scss';
import listeAPropos from '../../public/apropos.json';
import Button from '../components/boutons.jsx';



function Banner () {
  return (
    <div className='imgSlogandiv'>
      <div className='imgSlogan'>
      <img src = {imgFondSlogan} alt ="vallée montagneuse" titre ="vallée montagneuse"/>
      </div>
    </div>
  )
}


function Liste () {

  return (
    <main className='aPropos'>
      <div className='mainApropos'>
        {listeAPropos.map((element) => (
          <div className='boutonApropos' key = {element.id}>
          <Button loup = {element} />
          </div>
        ))}
      </div>  
    </main>
  )
}



const APropos = () => {
    return (
      <>
      <Banner />
      <Liste />
      </>
    )
  };

  export default APropos;
  