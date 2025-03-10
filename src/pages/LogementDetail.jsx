import ChoixLogementCarousel from "../components/choixLogementCarrousel";
import Pictures from "../../public/logements.json";
import {useParams} from "react-router-dom";




function LogementDetail () {
  const params = useParams()
    return (
      <main className="Main_LogementDetail">
        {Pictures.map((element) => (
          element.id === params.id && < ChoixLogementCarousel imgCarousel={element} key = {element.id}/>
          ))}
        
      </main>
    )
  };
  
  export default LogementDetail;
  