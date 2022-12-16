import React from 'react'

function Newsletter() {
  return (
      <div className='w-full my-8'>
          <h2 className='my-5 leading-10 font-bold'>Join our Newsletter</h2>
          <div className="my-5 flex items-start font-semibold ">
              <div className="leading-7 mr-5"> Design Stories</div>
              <div className="leading-7 mr-5 pl-5 border-l-2 border-l-slate-500">Programming Stories</div>
              <div className="leading-7 mr-5 pl-5 border-l-2 border-l-slate-500">Tech trends</div>
          </div>
          <p className='font-sm text-justify leading-8 mb-5'>Lorem ipsum dolor sit amet consectetur. Eu tellus turpis sem pellentesque risus. Diam egestas ac aliquet elementum feugiat.</p>
         
          <div className="w-full md:w-9/12 md:flex justify-between p-3 border-2 border-slate-600 rounded-lg ">
              <input className='w-full sm:w-9/12 px-4 py-2 border-none focus:outline-none' placeholder='Enter your email address' type="email" name="email" id="email" />
              <button className='w-full md:w-1/3 px-5 py-3 rounded-lg font-semibold bg-[#06113C] text-white' type='submit'>Click to Subscribe</button>
          </div>

    </div>
  )
}

export default Newsletter