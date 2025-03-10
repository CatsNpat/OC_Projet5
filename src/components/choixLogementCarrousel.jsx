import AffichageDetails from "./afficheDetails";
import Carousel from "./genererCarousel";

function ChoixLogementCarousel({imgCarousel}) {
    return (
        <div className="Carousel_Container">
            < Carousel ttesSlides = {imgCarousel.pictures} key = "carousel.{imgCarousel.id}"/>
            < AffichageDetails logement = {imgCarousel} key = "detail.{imgCarousel.id}"/>
        </div>
    )
}

export default ChoixLogementCarousel;
