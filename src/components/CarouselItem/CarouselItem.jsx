// import React from 'react';

// const CarouselItem = ({ image, title, description }) => {
//   return (
//     <div className="w-full h-full flex items-center justify-center">
//       <img src={image} alt={title} className="w-64 h-64 rounded-lg" />
//       <div className="px-4 py-2">
//         <h3 className="text-lg font-bold">{title}</h3>
//         <p className="text-gray-700">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default CarouselItem;

import React, { useState } from "react";


const CarouselItem = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://picsum.photos/id/1/600/400",
    "https://picsum.photos/id/2/600/400",
    "https://picsum.photos/id/3/600/400",
    "https://picsum.photos/id/4/600/400",
    "https://picsum.photos/id/5/600/400"
  ];

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
