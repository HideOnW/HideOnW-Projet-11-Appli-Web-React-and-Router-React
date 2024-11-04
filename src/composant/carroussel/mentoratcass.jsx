import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ImageCarrousel.css'; // Pour ajouter des styles

const ImageCarrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour aller à l'image suivante
  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    setCurrentIndex(isLastImage ? 0 : currentIndex + 1);
  };

  // Fonction pour aller à l'image précédente
  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    setCurrentIndex(isFirstImage ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="carrousel-container">
      <div className="image-container">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="carrousel-image"
        />
      </div>

      {images.length > 1 && (
        <>
          <button className="left-arrow" onClick={goToPrevious}>
            <FaChevronLeft />
          </button>
          <button className="right-arrow" onClick={goToNext}>
            <FaChevronRight />
          </button>
          <div className="index">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarrousel;