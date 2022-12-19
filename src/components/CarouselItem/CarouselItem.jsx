import React, { Children, cloneElement, useState, useEffect } from 'react'

export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item items-center justify-center rounded-l-3xl" style={{ width: width }}>
            {children}
        </div>
    )
}

const Carousel = ({children}) => {
const [activeIndex, setActiveIndex] = useState(0)
    const [paused, setPaused] = useState(false)

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = Children.count(children) - 1;
        } else if (newIndex >= Children.count(children)) {
            newIndex = 0
        }
        setActiveIndex(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1)
            }
        }, 1500)

        return () => {
            clearInterval(interval)
        }
    })

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="overflow-hidden">
      <div className="transition-transform whitespace-nowrap" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {Children.map(children, (child, index) => {
                    return cloneElement(child, { width: '100%' })
                })}
      </div>
      <div className="flex justify-center">
            {Children.map(children, (child, index) => {
                    return (<button className={`${index === activeIndex ? 'bg-sky-700 rounded-full m-2 h-2 w-2' : ''}`} onClick={() => updateIndex(index)}>
                        {''}
                    </button>)
                })}
      </div>
    </div>
  );
};

export default Carousel;

// import React, { useEffect, useState } from "react";

// const CarouselItem = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     "https://picsum.photos/id/1/600/400",
//     "https://picsum.photos/id/2/600/400",
//     "https://picsum.photos/id/3/600/400",
//     "https://picsum.photos/id/4/600/400",
//     "https://picsum.photos/id/5/600/400"
//   ];
//   useEffect(() => {
//     const newIndex = currentIndex - 1
//     setTimeout(() => {
//       setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex)
//     }, 1500);

// },[currentIndex,images.length])
  
//   const previous = () => {
//     const newIndex = currentIndex - 1;
//     setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
//   };

//   const next = () => {
//     const newIndex = currentIndex + 1;
//     setCurrentIndex(newIndex === images.length ? 0 : newIndex);
//   };

//   return (
//     <div className="relative w-full h-full rounded-lg">
//       <button
//         className="absolute left-0 top-0 mt-3 ml-3"
//         onClick={previous}
//       >
//         Previous
//       </button>
//       <button
//         className="absolute right-0 top-0 mt-3 mr-3"
//         onClick={next}
//       >
//         Next
//       </button>

//       <img
//         src={images[currentIndex]}
//         alt="slideshow"
//         className="w-full h-full object-cover rounded-lg"
//       />
//     </div>
//   );
// };

// export default CarouselItem;
