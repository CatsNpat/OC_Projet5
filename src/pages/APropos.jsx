import imgFondSlogan from '../assets/imgHome/Image source 2.png';
import '../assets/my-sass.scss';
import Banner from '../components/banner.jsx';
import Liste from '../components/liste.jsx';

const APropos = () => {
    return (
      <>
      <Banner
      element= {imgFondSlogan}
      alt= "Photo d'une vallée montagneuse"
      title = "Photo d'une vallée montagneuse"
      h2 ="" />
      <Liste />
      </>
    )
  };

  export default APropos;
  