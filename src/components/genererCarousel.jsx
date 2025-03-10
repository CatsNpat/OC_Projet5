import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faDisplay, fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Carousel ({ttesSlides}) {
    const[slide, setSlide] = useState(0);

    const SlidePrevious = () => {
        const firstSlide = slide === 0;
        const newIndex = firstSlide ? ttesSlides.length - 1 : slide - 1;
        setSlide(newIndex);
        };
        
    const SlideNext = () => {
        const lastSlide = slide === ttesSlides.length - 1;
        const newIndex = lastSlide ? 0 : slide + 1;
        setSlide(newIndex);
        };

    return (
        <section className = "Carousel_Containers">
            <img src = {ttesSlides[slide]} key = {slide}/>
            <div className="Carousel_Chevrons">
                <button onClick = {SlidePrevious}><FontAwesomeIcon icon={['fas', 'chevron-left']} className='Icon'/></button>
                <button onClick = {SlideNext}><FontAwesomeIcon icon={['fas', 'chevron-right']} className='Icon'/></button>
            </div>
        </section>
    )
    
}

export default Carousel;