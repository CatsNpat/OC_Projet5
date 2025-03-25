import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faDisplay, fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Carousel ({ttesSlides}) {
    const[slide, setSlide] = useState(0);

    const SlidePrevious = () => {
        const newIndex = slide === 0 ? ttesSlides.length - 1 : slide - 1;
        setSlide(newIndex);
        };
        
    const SlideNext = () => {
        const newIndex = slide === ttesSlides.length - 1 ? 0 : slide + 1;
        setSlide(newIndex);
        };

    return (
        <section className = "Carousel_Containers">
            <div className='Carousel_Containers_Img'>
                <img src = {ttesSlides[slide]} key = {slide}/>
            </div>
            {ttesSlides.length >= 2 ?
            <div className="Carousel_Chevrons">
                <button onClick = {SlidePrevious}><FontAwesomeIcon icon={['fas', 'chevron-left']} className='Icon'/></button>
                <button onClick = {SlideNext}><FontAwesomeIcon icon={['fas', 'chevron-right']} className='Icon'/></button>
            </div>
            : null}
        </section>
    )
    
}

export default Carousel;