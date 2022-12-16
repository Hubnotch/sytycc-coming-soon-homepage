import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import first from '../../assets/01.jpg'
import second from '../../assets/02.jpg'
import third from '../../assets/03.jpg'
import fourth from '../../assets/12.jpg'

const CarouselItem = () => {
  const images = [
  {img:first,id:1},
  {img:second,id:2},
  {img:third,id:3},
  {img:fourth,id:4},
]
  return (
    <Carousel interval={1500}>
      {images.map((url, index) => (
        <div className="max-w-full max-h-full" key={url.id}>
          <img className='max-h-full max-w-full' src={url.img} alt={url.img} />
        </div>
      ))}
                {/* <div>
                    <img src={first} alt="carousel" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={second} alt="carousel" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={third} alt="carousel" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={fourth} alt="carousel" />
                    <p className="legend">Legend 4</p>
                </div> */}
            </Carousel>
  );
};

export default CarouselItem;
