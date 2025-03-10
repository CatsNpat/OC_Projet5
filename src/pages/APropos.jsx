import imgFondSlogan from '../assets/imgHome/Image source 2.png';
import '../assets/my-sass.scss';
import listeAPropos from '../../public/apropos.json';
import Collapse from '../components/collapse.jsx';
import Banner from '../components/banner.jsx';



function Liste () {

  return (
    <main className='aPropos'>
      <div className='mainApropos'>
        {listeAPropos.map((element) => (
          <div className='boutonApropos' key = {element.id}>
          <Collapse title = {element.title} text = {element.text} />
          </div>
        ))}
      </div>  
    </main>
  )
}



const APropos = () => {
    return (
      <>
      <Banner
      element= {imgFondSlogan}
      alt= "Photo d'une vallée montagneuse"
      titre = "Photo d'une vallée montagneuse"
      h2 ="" />
      <Liste />
      </>
    )
  };

  export default APropos;
  