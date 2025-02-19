import PencilIcon from "../components/PencilIcon";
import FacebookIcon from "../components/FacebookIcon";
import InstagramIcon from "../components/InstagramIcon";
import EmailIcon from "../components/EmailIcon";
import { MoveRight } from "lucide-react";
import { useState } from "react";

function Footer() {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  })

  return (
    <footer className="p-7.5 md:px-15 lg:pt-15">
      <div className="py-15 md:flex md:flex-col md:items-center md:px-15 decor-y">
        <h3 className="font-ogg text-2xl text-center px-8 mb-6 md:text-[45px] z-1">Interested in becoming a vendor?</h3>
        <button type="button" className="font-apercu-mono lowercase border-1 w-full py-5 hover:bg-black hover:text-white cursor-pointer transition-all md:w-45">
          Click here
        </button>
      </div>

      <div className="my-7.5 grid gap-y-8 md:grid md:grid-cols-3 md:gap-[60px] lg:mt-15">
        <div className="p-14 flex flex-col items-center cursor-pointer animate-borders lg:h-[210px] justify-center">
          <PencilIcon />
          <p className="font-apercu-mono text-center mt-3 text-sm">Email us</p>
        </div>
        <div className="p-14 flex flex-col items-center cursor-pointer animate-borders justify-center">
          <FacebookIcon />
          <p className="font-apercu-mono text-center mt-3 text-sm">Follow us<br /> on facebook</p>
        </div>
        <div className="p-14 flex flex-col items-center cursor-pointer animate-borders z-1 justify-center">
          <InstagramIcon />
          <p className="font-apercu-mono text-center mt-3 text-sm">Follow us<br /> on instagram</p>
        </div>
        <div className="p-7.5 flex flex-col items-center md:col-start-1 md:col-end-4 lg:grid lg:grid-cols-[min(260px,50%)_auto] lg:gap-x-15 lg:px-15 lg:py-7.5 animate-borders z-1">
          { width < 1024 && <EmailIcon /> }
          <p className="font-apercu-mono text-center my-3 text-sm md:text-[22px] lg:text-start lg:my-0">{ width >= 1024 ? 'Stay up to date with our newsletter' : 'Get updates in your inbox' }</p>
          <div className="border-1 flex justify-between py-4.5 px-6 w-[min(680px,100%)] ml-auto">
            <input type="email" placeholder="Email" className="placeholder:text-black placeholder:font-apercu-mono text-sm w-full focus:outline-none" />
            <button type="button"><MoveRight /></button>
          </div>
        </div>
      </div>

      <div className="font-apercu-regular text-[10px] md:text-sm grid grid-cols-2 gap-y-7.5 lg:grid-cols-[3fr_3fr_3fr_2fr] mb-7.5">
          <a href="#" className="underline lg:col-start-2 lg:col-end-3 lg:mx-auto">Privacy Policy</a>
          <a href="#" className="underline ml-auto lg:ml-0">Vendor Login</a>
          <a href="#" className="lg:ml-auto z-1">Site by Aurelio ;&#41;</a>
          <p className="ml-auto lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:ml-0">Copyright Canal Street Market 2025</p>
      </div>
    </footer>
  )
}

export default Footer;