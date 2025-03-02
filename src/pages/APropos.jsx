import imgFondSlogan from '../assets/imgHome/Image source 2.png';
import '../assets/my-sass.scss';
import listeAPropos from '../../public/apropos.json';
import Button from '../components/boutons.jsx';



function Banner () {
  return (
    <div className='imgSlogan'>
    <img src = {imgFondSlogan} alt ="vallée montagneuse" titre ="vallée montagneuse"/>
  </div>
  )
}


function Liste () {

  return (
    <main>
      <>
        {listeAPropos.map((element) => (
          <div key = {element.id}>
          <Button loup = {element} />
          </div>
        ))}
      </>  
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
  