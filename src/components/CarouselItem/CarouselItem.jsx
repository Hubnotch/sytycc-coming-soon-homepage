import React, { useEffect, useState } from "react";

const CarouselItem = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://picsum.photos/id/1/600/400",
    "https://picsum.photos/id/2/600/400",
    "https://picsum.photos/id/3/600/400",
    "https://picsum.photos/id/4/600/400",
    "https://picsum.photos/id/5/600/400"
  ];
  useEffect(() => {
    const newIndex = currentIndex - 1
    setTimeout(() => {
      setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex)
    }, 1500);

},[currentIndex,images.length])
  const previous = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  const next = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === images.length ? 0 : newIndex);
  };

  return (
    <div className="relative w-full h-full">
      <button
        className="absolute left-0 top-0 mt-3 ml-3"
        onClick={previous}
      >
        Previous
      </button>
      <button
        className="absolute right-0 top-0 mt-3 mr-3"
        onClick={next}
      >
        Next
      </button>

      <img
        src={images[currentIndex]}
        alt="slideshow"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CarouselItem;
