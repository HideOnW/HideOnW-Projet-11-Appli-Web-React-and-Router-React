import './carroussel.css'
import React, { useState } from 'react';
import whitearrow from '../../asset/carrousselarrow.png'

function Carroussel ({images}){

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        const lastImage = currentImage === images.length - 1;
        setCurrentImage(lastImage ? 0 : currentImage + 1)
    };

    const previousImage = () => {
        const firstImage = currentImage === 0;
        setCurrentImage(firstImage ? images.length - 1 : currentImage - 1);
    };

    console.log({images})


    return (
        <div className="divCaroussel">
            <div className="divImage">
                <img 
                src={images[currentImage]}
                alt={`Image ${currentImage + 1}`}
                className="imageCaroussel"
                />                
            </div>

            {images.length > 1 && (
        <>
        <div className='divButton'>
          <button className="leftArrow" onClick={previousImage}>
              <img src={whitearrow} alt='arrow previous image'/>
          </button>
          <button className="rightArrow" onClick={nextImage}>
              <img src={whitearrow} alt='arrow next image'/>
          </button>
          </div>
          <div className="index">
            {currentImage + 1} / {images.length}
          </div>
        </>
      )}


        </div>

    )

}

export default Carroussel




    //     <div className="image-gallery">
    //          {images.map((image, index) => (
    //          <img key={index} src={image} alt={`Image ${index + 1}`} className="gallery-image" />
    //   ))}
    // </div>


        // <div className='carroussel'>
        //     {image.map(({image}) =>
        //     <img src={image}></img>
        //     )}
        // </div>