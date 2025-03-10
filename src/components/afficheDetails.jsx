import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);


function AffichageDetails({logement}) {
    return(
        <section className='logement_detail'>
            <div className='logement_detailPremier'>
                <h3>
                    <p className='logement_titre'>{logement.title}</p>
                    <p>{logement.location}</p>
                </h3>
                <nav>
                    {logement.tags.map((element, index) =>
                    <button key={index}>{element}</button>
                    )}
                </nav>
            </div>    
            <div className='logement_detailDeuxieme'>
                <h4>
                    <p>{logement.host.name}</p>
                    <img src = {logement.host.picture}/>
                </h4>
                <div>
                    {logement.rating >0 ? <FontAwesomeIcon icon="fa-solid fa-star" /> : <FontAwesomeIcon icon="fa-regular fa-star" />}
                    {logement.rating >1 ? <FontAwesomeIcon icon="fa-solid fa-star" /> : <FontAwesomeIcon icon="fa-regular fa-star" />}
                    {logement.rating >2 ? <FontAwesomeIcon icon="fa-solid fa-star" /> : <FontAwesomeIcon icon="fa-regular fa-star" />}
                    {logement.rating >3 ? <FontAwesomeIcon icon="fa-solid fa-star" /> : <FontAwesomeIcon icon="fa-regular fa-star" />}
                    {logement.rating >4 ? <FontAwesomeIcon icon="fa-solid fa-star" /> : <FontAwesomeIcon icon="fa-regular fa-star" />}
                </div>
            </div>
        </section>
    )
}
export default AffichageDetails;