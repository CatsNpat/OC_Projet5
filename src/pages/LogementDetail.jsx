import ChoixLogementCarousel from "../components/choixLogementCarrousel";
import Pictures from "../../public/logements.json";
import {useParams} from "react-router-dom";




function LogementDetail () {
  const params = useParams()
    return (
      <ChoixLogementCarousel 
      imgCarousel={Pictures}
      idLogement = {params.id}/>
    )
  };
  
  export default LogementDetail;
  