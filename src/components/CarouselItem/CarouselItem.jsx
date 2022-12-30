import React, { Children, cloneElement, useState, useEffect } from 'react'
import {FaChevronRight,FaChevronLeft } from 'react-icons/fa'
export const CarouselItem = ({ children, width }) => {
    return (
        <div className="inline-flex items-center justify-center rounded-l-3xl w-16" style={{ width: width }}>
            {children}
        </div>
    )
}

const Carousel = ({children}) => {
const [activeIndex, setActiveIndex] = useState(0)
    const [paused, setPaused] = useState(true)

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
        }, 2000)

        return () => {
            clearInterval(interval)
        }
    })

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="overflow-hidden relative"
      >
        <div className="z-0 transition-transform whitespace-nowrap" style={{ transform: `translateX(-${activeIndex * 100}%)` }} >
              {Children.map(children, (child, index) => {
                    return cloneElement(child, { width: '100%' })
                })}
          </div>
          <button className='cursor-pointer absolute -left-[5%] text-black z-50 '>
              <FaChevronLeft />
         </button>
          <button className='cursor-pointer absolute top-[45%] -right-4 text-black z-50'>
              <FaChevronRight />
          </button>
        <div
              className="flex justify-center">
            {Children.map(children, (child, index) => {
                    return (<button className={`${index === activeIndex ? 'bg-sky-700 rounded-full m-2 h-4 w-4 scale-95' : 'bg-slate-400 rounded-full m-2 h-3 w-3'}`} onClick={() => updateIndex(index)}>
                        {' '}
                    </button>)
                })}


        </div>
    </div>
  );
};

export default Carousel;