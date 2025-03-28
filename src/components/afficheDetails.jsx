import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);


function AffichageDetails({logement}) {
    const rating = ["1", "2", "3", "4", "5"];
    return(
        <section className='logement_detail'>
            <div className='logement_detailPremier'>
                <h3>
                    <p className='logement_titre'>{logement.title}</p>
                    <p className='logement_titre_lieu'>{logement.location}</p>
                </h3>
                <nav>
                    {logement.tags.map((element, index) =>
                    <button key={index}>{element}</button>
                    )}
                </nav>
            </div>    
            <div className='logement_detailDeuxieme'>
                <h4 className ='logement_detailDeuxiemeHost'>
                    <p>{logement.host.name}</p>
                    <img src = {logement.host.picture}/>
                </h4>
                <div className='logement_detailDeuxiemeRating'>
                    {rating.map((toto) =>(
                    logement.rating >= toto ? <FontAwesomeIcon icon="fa-solid fa-star" /> : <FontAwesomeIcon icon="fa-regular fa-star" />))}
                </div>
            </div>
        </section>
    )
}
export default AffichageDetails;