import React,{useState} from 'react';
import Carousel,{CarouselItem} from '../CarouselItem/CarouselItem';
import first from '../../assets/Rectangles.png'
import avatar1 from '../../assets/image35.png'
import avatar2 from '../../assets/image36.png'
import avatar3 from '../../assets/image37.png'
import avatar4 from '../../assets/image39.png'
import Onboarding from '../Onboarding/Onboarding'

function Button() {

const [showModal,setShowModal] = useState(false)

  const images = [
    {id: 1, img:first},
  ]
  const handleClick = () => {
    setShowModal(prevState => !prevState )
  }
  
  return (
    <div>
      <h3 className='font-bold text-center text-2xl leading-8 my-4'>What Our Members Say</h3>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Eu tellus turpis sem pellentesque risus. Diam egestas ac aliquet elementum feugiat. Gravida ultrices dignissim vehicula arcu. Enim eget eget ac nisl sit quam venenatis integer vitae...</p>
      <div className='grid grid-cols-1 md:grid-cols-[20%_60%_20%] grid-rows-1 my-5 p-6'>
        <div className='hidden p-5 md:flex md:flex-col md:justify-between'>
          <div className="flex items-center flex-col self-end">
            <div className=" w-20 h-20 rounded-full bg-[#C7D1FB] flex items-center justify-center">
              <img className=' cover' src={avatar1} alt="img something" />
            </div>
            <p className="text-sm text-center">Kench</p>
          </div>
          <div className="flex items-center flex-col self-start">
            <div className=" w-20 h-20 rounded-full bg-[#C7D1FB] flex items-center justify-center">
              <img className=' cover' src={avatar2} alt="img something" />
            </div>
            <p className="text-sm text-center">Yellowpaw</p>
          </div>
          <div className="flex items-center flex-col self-end">
            <div className=" w-20 h-20 rounded-full bg-[#C7D1FB] flex items-center justify-center">
              <img className=' cover' src={avatar3} alt="img something" />
            </div>
            <p className="text-sm text-center">Ishaya</p>
          </div>
        </div>

        <div className='p-3'>
          <Carousel>
            {images.map(item => (
              <CarouselItem key={item.id}>
                <img className='block ' src={item.img} alt={item.img} />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
         <div className='hidden p-5 md:flex md:flex-col md:justify-between'>
          <div className="flex items-center flex-col self-start">
            <div className=" w-20 h-20 rounded-full bg-[#C7D1FB] flex items-center justify-center">
              <img className=' cover' src={avatar1} alt="img something" />
            </div>
            <p className="text-sm text-center">Ekene</p>
          </div>
          <div className="flex items-center flex-col self-end">
            <div className=" w-20 h-20 rounded-full bg-[#C7D1FB] flex items-center justify-center">
              <img className=' cover' src={avatar4} alt="img something" />
            </div>
            <p className="text-sm text-center">Mayaki</p>
          </div>
          <div className="flex items-center flex-col self-start">
            <div className=" w-20 h-20 rounded-full bg-[#C7D1FB] flex items-center justify-center">
              <img className=' cover' src={avatar3} alt="img something" />
            </div>
            <p className="text-sm text-center">Samuel</p>
          </div>
        </div>
      </div>


      <div className='text-center'>
          <button onClick={handleClick} className='px-7 py-4 bg-[#06113C] border rounded-xl uppercase font-bold text-[#FEFEFE] my-8'>Get Onboard</button>
      </div>
      <Onboarding visible={showModal} handleClick={ handleClick} />

    </div>
  )
}

export default Button
