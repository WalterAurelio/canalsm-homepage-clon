function Navbar() {
  return (
    <nav className="font-apercu-mono text-xl hidden md:block"> {/* ancho 180px */}
      <ul className="rotate-90 fixed bottom-0 top-0 w-[100vh] right-0">
        <li className="bg-yellow-custom text-center py-4 animate-yellow-bar relative h-15"> {/* margin-right: 522px */}
          <p className="absolute -rotate-90 animate-yellow-ch">文化</p>
          <a href="#" className="absolute animate-yellow-text">Community</a>
        </li>
        <li className="bg-red-custom text-center py-4 animate-red-bar relative h-15">
          <p className="absolute -rotate-90 animate-red-ch">購物</p>
          <a href="#" className="absolute animate-red-text">Retail</a>
        </li>
        <li className="bg-lblue-custom text-center py-4 animate-blue-bar relative h-15">
          <p className="absolute -rotate-90 animate-blue-ch">餐饮</p>
          <a href="#" className="absolute animate-blue-text">Food</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;