import { Menu, X } from 'lucide-react';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import { useState } from 'react';

function HamburgerNavbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='relative z-2 md:hidden'>
      <div
        onClick={() => setIsActive(!isActive)}
        className='z-1'
      >
        <X size={44} color='#3f3f3f' strokeWidth={1} className={`absolute -top-6 transition-all ease-out duration-600 ${ isActive ? '-right-0.5 opacity-100' : 'right-7 opacity-0' }`} />
        <Menu size={40} color='#3f3f3f' strokeWidth={1} className={`absolute -top-5.5 transition-all ease-out duration-600 ${ isActive ? '-right-7 opacity-0' : 'right-0 opacity-100' }`} />
      </div>
    
      <div className={`fixed left-0 right-0 top-0 h-screen overflow-y-scroll overscroll-contain -z-1 ${ isActive ? '' : 'fade-out' }`}>
        <ul className='grid grid-cols-2 h-[86%] font-apercu-mono text-xl'>
          <li className='bg-white flex justify-center items-center animate-[spawn_0.6s]'>
            <a href="#" className='-rotate-45'>About</a>
          </li>
          <li className='bg-lblue-custom flex justify-center items-center opacity-0 animate-[spawn_0.6s] delay-food-h'>
            <a href="#" className='rotate-45'>Food</a>
          </li>
          <li className='bg-red-custom flex justify-center items-center opacity-0 animate-[spawn_0.6s] delay-retail-h'>
            <a href="#" className='rotate-45'>Retail</a>
          </li>
          <li className='bg-yellow-custom flex justify-center items-center opacity-0 animate-[spawn_0.6s] delay-community-h'>
            <a href="#" className='-rotate-45'>Community</a>
          </li>
        </ul>
        <div className='bg-white p-7.5 font-apercu-mono opacity-0 animate-[spawn_0.6s] delay-bhalf-h'>
          <button type="button" className="lowercase border-1 w-full py-5 hover:bg-black hover:text-white cursor-pointer transition-all mb-5">
            Become a vendor
          </button>
          
          <p className='mb-7.5'>265 Canal Street<br />New York, New York</p>
          <p className='mb-7.5'>Food Hall Hours:<br />Mon - Sun: 11AM - 8PM</p>
          <p className='mb-7.5'>Retail Market Hours:<br />Thurs - Sun: 11AM - 7PM</p>

          <a href="#" className='underline text-sm'>Email us</a>

          <div className='grid grid-cols-2 mt-7.5 gap-x-7.5'>
            <a href='#' className="p-3 flex flex-col items-center cursor-pointer border-1">
              <FacebookIcon />
            </a>
            <a href='#' className="p-3 flex flex-col items-center cursor-pointer border-1">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HamburgerNavbar