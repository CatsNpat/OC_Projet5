import LogementChoisi from "../components/LogementChoisi";
import Pictures from "../../public/logements.json";
import {useParams} from "react-router-dom";




function LogementDetail () {
  const params = useParams()
    return (
      <main className="Main_LogementDetail">
        {Pictures.map((element) => (
          element.id === params.id && < LogementChoisi imgCarousel={element} key = {element.id}/>
          ))}
        
      </main>
    )
  };
  
  export default LogementDetail;
  