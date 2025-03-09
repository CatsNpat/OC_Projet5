import Carousel from "./genererCarousel";

function ChoixLogementCarousel({imgCarousel, idLogement}) {
    return (
        <div className="Carousel_Container">
            {imgCarousel.map((element) => (
                element.id === idLogement ? < Carousel ttesSlides = {element.pictures} key = {idLogement}/> : null
            ))}
        </div>
    )
}

export default ChoixLogementCarousel;