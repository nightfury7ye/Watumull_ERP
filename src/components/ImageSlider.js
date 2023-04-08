import React,{useRef} from "react";
import { Slide } from 'react-slideshow-image';
import audience1 from "../assets/gallery/audience1.jpg";
import audience2 from "../assets/gallery/audience2.jpg";
import commitee from "../assets/gallery/commitee.jpeg";
import mandatory1 from "../assets/gallery/mandatory1.jpg";
import class1 from "../assets/gallery/class1.jpeg";
import class2 from "../assets/gallery/class2.jpeg";
import class3 from "../assets/gallery/class3.jpeg";
import staff from "../assets/gallery/staff.jpeg";

import carrom from "../assets/gallery/carrom.jpg";
import carrom2 from "../assets/gallery/carrom2.jpg";
import chess from "../assets/gallery/chess.jpg";
import football from "../assets/gallery/football.jpg";
import TT from "../assets/gallery/TT.jpg";
import ensemble_people from "../assets/gallery/ensemble_people.tiff";
import './imageslider.css'

// const slideImages = [
//     programmer,
//     aerial,
//     ardino,
// ];

const slideImages = [
    [audience1, class3, commitee],
    [mandatory1, football, carrom],
    [class1, staff, audience2],
    [carrom, mandatory1, chess],
    [commitee, TT, staff],
    [carrom2, class2, audience2],
  ];

const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    // indicators: false,
    arrows: false,
    pauseOnHover: false
}

const sliderRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()];

const previous = () => {
sliderRefs.forEach(slider => {
    slider.current.goBack();
});
}

const next = () => {
sliderRefs.forEach(slider => {
    slider.current.goNext();
});
}

const ImageSlider = () => {
  return (
    // <div className="slide-container">
    //   <Slide {...properties}>
    //     {slideImages.map((each, index) => (
    //       <div className="each-slide" key={index}>
    //         <div style={{backgroundImage : `url(${each})`}}>
    //           <span>Slide {index + 1}</span>
    //         </div>
    //       </div>
    //     ))}
    //   </Slide>
    // </div>
    <div>
        <div className="four-slider-container">
            <div className="slider-wrapper slide1">
                <Slide ref={sliderRefs[0]} {...properties}>
                {slideImages[0].map((each, index) => (
                    <div className="each-slide" key={index} style={{ backgroundImage: `url(${each})`}}>
                    
                    </div>
                ))}
                </Slide>
            </div>
            <div className="slider-wrapper slide2">
                <Slide ref={sliderRefs[1]} {...properties}>
                {slideImages[1].map((each, index) => (
                    <div className="each-slide" key={index} style={{ backgroundImage: `url(${each})`}}>
                    
                    </div>
                ))}
                </Slide>
            </div>
            <div className="slider-wrapper slide3">
                <Slide ref={sliderRefs[2]} {...properties}>
                {slideImages[2].map((each, index) => (
                    <div className="each-slide" key={index} style={{ backgroundImage: `url(${each})`}}>
                    
                    </div>
                ))}
                </Slide>
            </div>
        </div>

        <div className="four-slider-container">
            <div className="slider-wrapper slide4">
                <Slide ref={sliderRefs[3]} {...properties}>
                {slideImages[3].map((each, index) => (
                    <div className="each-slide" key={index} style={{ backgroundImage: `url(${each})`}}>
                    
                    </div>
                ))}
                </Slide>
            </div>
            <div className="slider-wrapper slide5">
                <Slide ref={sliderRefs[4]} {...properties}>
                {slideImages[4].map((each, index) => (
                    <div className="each-slide" key={index} style={{ backgroundImage: `url(${each})`}}>
                    
                    </div>
                ))}
                </Slide>
            </div>
            <div className="slider-wrapper slide6">
                <Slide ref={sliderRefs[5]} {...properties}>
                {slideImages[5].map((each, index) => (
                    <div className="each-slide" key={index} style={{ backgroundImage: `url(${each})`}}>
                    
                    </div>
                ))}
                </Slide>
            </div>
        </div>
        <div className="arrow-wrapper">
            <span className="arrow left-arrow" onClick={previous}>&#10094;</span>
            <span className="arrow right-arrow" onClick={next}>&#10095;</span>
        </div>
    </div>
  )
}

export default ImageSlider;