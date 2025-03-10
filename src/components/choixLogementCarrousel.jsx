import AffichageDetails from "./afficheDetails";
import Carousel from "./genererCarousel";
import Collapse from "./collapse";

function ChoixLogementCarousel({imgCarousel}) {
    return (
        <div className="Carousel_Container">
            < Carousel ttesSlides = {imgCarousel.pictures} key = "carousel.{imgCarousel.id}"/>
            < AffichageDetails logement = {imgCarousel} key = "detail.{imgCarousel.id}"/>
            <section className="logement_detailCollapse">
                <div className="logement_divCollapse">
                    < Collapse title = "Description" text = {imgCarousel.description} key = "collapseD.{imgCarousel.id}" />
                </div>
                <div className="logement_divCollapse">
                    < Collapse title = "Équipements" text ={imgCarousel.equipments.map((element, index) => (<li key ={index}>{element}</li>))} key = "collapseE.{imgCarousel.id}" />
                </div>
            </section>
        </div>
    )
}

export default ChoixLogementCarousel;
